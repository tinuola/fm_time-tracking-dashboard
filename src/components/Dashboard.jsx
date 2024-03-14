import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import data from '../data/data.json'

function Dashboard() {
  // Data
  const user = data.user
  const periods = data.range
  let testStats = data.stats

  // States
  const [period, setPeriod] = useState(0)
  const [currPeriod, setCurrPeriod] = useState(periods[period].curr)
  const [prevPeriod, setPrevPeriod] = useState(periods[period].prev)
  let [stats, setStats] = useState(() => getStats(period))
  // const [dailyStats, setDailyStats] = useState(getStats(period))

  // Return array of stats
  function getStats(num) {
    let currPeriod = periods[num].curr

    let dataToUse = data.stats.map((stat) => {
      return {
        title: stat.title,
        currStat: stat.timeframes[currPeriod].current,
        prevStat: stat.timeframes[currPeriod].previous,
      }
    })

    if (num === 0 && !sessionStorage.getItem('dailyStats')) {
      sessionStorage.setItem('dailyStats', JSON.stringify(dataToUse))
    } else if (num === 0 && sessionStorage.getItem('dailyStats')) {
      let newDailyDataToUse = JSON.parse(sessionStorage.getItem('dailyStats'))
      return newDailyDataToUse
    } else {
      return dataToUse
    }

    // if daily, and there's nothing in storage
    // send the new object to storage
    // otherwise get what's in storage
    // and return that to use

    // return data.stats.map((stat) => {
    //   return {
    //     title: stat.title,
    //     currStat: stat.timeframes[currPeriod].current,
    //     prevStat: stat.timeframes[currPeriod].previous,
    //   }
    // })
  }

  // When time period is clicked, UserCard passes up value of 'num'
  // The result or num is used to update the states
  const switchTimePeriod = (num) => {
    setPeriod(num)
    setCurrPeriod(periods[num].curr)
    setPrevPeriod(periods[num].prev)

    // if (num === 0) {
    //   console.log('hello')
    // } else {
    let newStats = getStats(num)
    // console.log(newStats)
    // setStats(() => (stats = [...newStats]))
    setStats(() => newStats)

    // setStats(() => getStats(num))
    // }
  }

  const updateDailyValue = (e, idx) => {
    e.preventDefault()

    let inputFields = document.querySelectorAll('input')
    let forms = document.querySelectorAll('form')

    if (inputFields[idx].value) {
      // console.log(
      //   'Updated value is: ',
      //   inputFields[idx].value,
      // )
      let clonedStats = stats

      // update clonedStats with new daily value from input field
      clonedStats[idx].currStat = +inputFields[idx].value

      // update storage
      sessionStorage.setItem('dailyStats', JSON.stringify(clonedStats))

      // update stats with clonedStats
      setStats(() => (stats = [...clonedStats]))
      console.log(stats)
      // setStats(clonedStats)

      inputFields[idx].value = ''
      forms[idx].classList.toggle('form')
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <UserCard
        user={user}
        periodBtns={periods.map((obj) => obj.curr)}
        handleTimePeriodSelection={switchTimePeriod}
      />
      <StatCard
        currPeriod={currPeriod}
        prevPeriod={prevPeriod}
        stats={stats}
        getUpdatedDailyValue={updateDailyValue}
      />
    </div>
  )
}

export default Dashboard

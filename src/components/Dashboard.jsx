import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import appData from '../data/data.json'
import getStats from '../utils/getStats'

function Dashboard() {
  // Data
  const user = appData.user
  const periods = appData.range

  // States
  const [period, setPeriod] = useState(0)
  const [currPeriod, setCurrPeriod] = useState(periods[period].curr)
  const [prevPeriod, setPrevPeriod] = useState(periods[period].prev)
  let [stats, setStats] = useState(() => getStats(period))

  // Return array of stats
  /*
  function getStats(num) {
    // string values: 'daily', 'weekly', 'monthly'
    // to use as computed properties in data objects
    let currPeriod = periods[num].curr

    // Array of objects: {category name, current time, previous time}
    let data = appData.stats.map((stat) => {
      return {
        title: stat.title,
        currStat: stat.timeframes[currPeriod].current,
        prevStat: stat.timeframes[currPeriod].previous,
      }
    })

    /***  Session Storage logic: ***/

  // if daily period and there's nothing in storage,
  // add data to storage, return data

  // if daily period and data is stored, return stored data;
  // (stored data should be most up to date version of daily
  // data, after update by updateDailyValue function

  // else return data

  //     if (num === 0 && !sessionStorage.getItem('dailyStats')) {
  //       sessionStorage.setItem('dailyStats', JSON.stringify(data))
  //       return data
  //     } else if (num === 0 && sessionStorage.getItem('dailyStats')) {
  //       let updatedDailyStats = JSON.parse(sessionStorage.getItem('dailyStats'))
  //       return updatedDailyStats
  //     } else {
  //       return data
  //     }
  // }

  // When period is clicked, UserCard passes up value of 'num'
  // The result of num is used to update the states
  const switchTimePeriod = (num) => {
    setPeriod(num)
    setCurrPeriod(periods[num].curr)
    setPrevPeriod(periods[num].prev)
    setStats(() => getStats(num))
  }

  const updateDailyValue = (e, idx) => {
    e.preventDefault()

    console.log(idx)
    let inputFields = document.querySelectorAll('input')
    let forms = document.querySelectorAll('form')

    if (inputFields[idx].value) {
      let clonedStats = stats

      // update clonedStats with new daily value from input field
      clonedStats[idx].currStat = +inputFields[idx].value

      // update storage
      sessionStorage.setItem('dailyStats', JSON.stringify(clonedStats))

      // update stats state with clonedStats
      setStats(() => (stats = [...clonedStats]))

      // clear/hide form input
      inputFields[idx].value = ''
      forms[idx].classList.toggle('formElem')
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

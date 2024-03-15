import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import appData from '../data/data.json'
import calculateHours from '../utils/calculateHours'
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

    let inputFields = document.querySelectorAll('input')

    let forms = document.querySelectorAll('form')

    let dailyField = inputFields[idx]

    if (dailyField.value) {
      let clonedStats = stats

      let updatedValue = +dailyField.value

      let totalDailyStatsHours = calculateHours(clonedStats, idx, updatedValue)

      if (totalDailyStatsHours <= 24) {
        // update clonedStats with new daily value from input
        clonedStats[idx].currStat = updatedValue

        // update storage
        sessionStorage.setItem('dailyStats', JSON.stringify(clonedStats))

        // update stats state with clonedStats
        setStats(() => (stats = [...clonedStats]))

        // clear/hide/reset form input
        dailyField.value = ''
        forms[idx].classList.toggle('formElem')
        forms[idx].lastElementChild.innerText = ``
      } else {
        forms[
          idx
        ].lastElementChild.innerText = `Total daily hours can't be greater than 24`
      }
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

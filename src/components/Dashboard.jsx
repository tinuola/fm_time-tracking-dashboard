import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'

// Data
import appData from '../data/data.json'

// Helpers
import calculateHours from '../utils/calculateHours'
import getStats from '../utils/getStats'
import applyActiveClass from '../utils/applyActiveClass'

function Dashboard() {
  const periods = appData.range

  // States
  const [period, setPeriod] = useState(0)
  const [currPeriod, setCurrPeriod] = useState(periods[period].curr)
  const [prevPeriod, setPrevPeriod] = useState(periods[period].prev)
  let [stats, setStats] = useState(() => getStats(period))

  // When period is clicked, UserCard passes up value of 'num'
  // The result of num is used to update the states
  const switchTimePeriod = (idx) => {
    setPeriod(idx)
    setCurrPeriod(periods[idx].curr)
    setPrevPeriod(periods[idx].prev)
    setStats(() => getStats(idx))
    applyActiveClass(idx)
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
    <main className='dashboard-container'>
      <div className='user-card-block'>
        <UserCard handleTimePeriodSelection={switchTimePeriod} />
      </div>
      <div className='stats-cards-block'>
        <StatCard
          currPeriod={currPeriod}
          prevPeriod={prevPeriod}
          stats={stats}
          getUpdatedDailyValue={updateDailyValue}
        />
      </div>
    </main>
  )
}

export default Dashboard

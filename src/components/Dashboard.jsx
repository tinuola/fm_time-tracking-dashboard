import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'

// Data
import { getStats } from '../utils/appData'

// Helpers
import calculateHours from '../utils/calculateHours'
import applyActiveClass from '../utils/applyActiveClass'

function Dashboard() {
  // States
  const [period, setPeriod] = useState(0)
  let [stats, setStats] = useState(() => getStats(period))

  // UserCard passes up index of selected frequency
  // Value of index is used to update states
  const switchFrequency = (idx) => {
    // States
    setPeriod(idx)
    setStats(() => getStats(idx))

    // Set class on selected frequency
    applyActiveClass(idx)

    // create as helpers?
    // Remove form visibility when non-daily frequency is selected
    let forms = document.querySelectorAll('form')
    if (idx !== 0) {
      forms.forEach((form) => form.classList.remove('form-visible'))
    }

    // Remove expand when non-daily frequency is selected
    let wrappers = document.querySelectorAll('.stat-card-inner-wrapper')
    if (idx !== 0) {
      wrappers.forEach((wrapper) => wrapper.classList.remove('expand'))
    }
  }

  // Updates setStats when daily frequency is selected
  const updateDailyValue = (e, idx) => {
    e.preventDefault()

    // create getUIElements helper?
    let inputFields = document.querySelectorAll('input')

    let forms = document.querySelectorAll('form')

    let wrappers = document.querySelectorAll('.stat-card-inner-wrapper')

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
        forms[idx].classList.toggle('form-visible')
        forms[idx].lastElementChild.innerText = ``
        // console.log(wrappers[idx])
        // console.log('remove expand')
        wrappers[idx].classList.remove('expand')
      } else {
        forms[
          idx
        ].lastElementChild.innerText = `Total daily hours can't be greater than 24`
      }
    } else {
      forms[idx].lastElementChild.innerText = `Enter a number please.`
    }
  }

  return (
    <main className='dashboard-container'>
      <div className='user-card-block'>
        <UserCard handleFrequencySelection={switchFrequency} />
      </div>
      <div className='stats-cards-block'>
        <StatCard
          period={period}
          stats={stats}
          getUpdatedDailyValue={updateDailyValue}
        />
      </div>
    </main>
  )
}

export default Dashboard

import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'

// Data
import { getStats } from '../utils/appData'

// Helpers
import calculateHours from '../utils/calculateHours'
import {
  applyActiveClass,
  getUIElements,
  toggleFormExpand,
  toggleFormVisibility,
} from '../utils/uiElemHelpers'

function Dashboard() {
  // States
  const [frequency, setFrequency] = useState(0)
  let [stats, setStats] = useState(() => getStats(frequency))

  // UserCard passes index of selected frequency
  // Value of index is used to update states
  const switchFrequency = (idx) => {
    // States
    setFrequency(idx)
    setStats(() => getStats(idx))

    // UI Behaviors:

    // Emphasize selected frequency
    applyActiveClass(idx)

    // Remove form when Daily is not selected
    toggleFormVisibility(idx)

    // Remove form expand class when Daily is not selected
    toggleFormExpand(idx)
  }

  // Updates setStats when daily frequency is selected
  const updateDailyValue = (e, idx) => {
    e.preventDefault()

    const { inputFields, forms, wrappers } = getUIElements()

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
          frequency={frequency}
          stats={stats}
          getUpdatedDailyValue={updateDailyValue}
        />
      </div>
    </main>
  )
}

export default Dashboard

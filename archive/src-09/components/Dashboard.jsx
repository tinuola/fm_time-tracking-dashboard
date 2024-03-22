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
  const switchFrequency = (freqIdx) => {
    // States
    setFrequency(freqIdx)
    setStats(() => getStats(freqIdx))

    // UI Behaviors:

    // Emphasize selected frequency
    applyActiveClass(freqIdx)

    // Remove form when Daily is not selected
    toggleFormVisibility(freqIdx)

    // Remove form expand class when Daily is not selected
    toggleFormExpand(freqIdx)
  }

  // Updates setStats when daily frequency is selected
  const updateDailyValue = (e, categoryIdx) => {
    e.preventDefault()

    const { inputFields, forms, wrappers } = getUIElements()

    let dailyField = inputFields[categoryIdx]

    if (dailyField.value) {
      let clonedStats = stats

      let updatedValue = +dailyField.value

      let totalDailyStatsHours = calculateHours(
        clonedStats,
        categoryIdx,
        updatedValue
      )

      if (totalDailyStatsHours <= 24) {
        // update clonedStats with new daily value from input
        clonedStats[categoryIdx].currStat = updatedValue

        // update storage
        sessionStorage.setItem('dailyStats', JSON.stringify(clonedStats))

        // update stats state with clonedStats
        setStats(() => (stats = [...clonedStats]))

        // clear/hide/reset form input
        dailyField.value = ''
        forms[categoryIdx].classList.toggle('form-visible')
        forms[categoryIdx].lastElementChild.innerText = ``
        wrappers[categoryIdx].classList.remove('expand')
      } else {
        forms[
          categoryIdx
        ].lastElementChild.innerText = `Total daily hours can't be greater than 24`
      }
    } else {
      forms[categoryIdx].lastElementChild.innerText = `Enter a number please.`
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

import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'

import { getStats } from '../utils/appData'
import { applyActiveClass } from '../utils/uiHelpers'

function Dashboard() {
  const [frequency, setFrequency] = useState(0)

  const [stats, setStats] = useState(() => getStats(frequency))

  // UserCard passes index of selected frequency
  // Value of index is used to update states
  const switchFrequency = (freqIdx) => {
    setFrequency(freqIdx)
    setStats(() => getStats(freqIdx))

    applyActiveClass(freqIdx)
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
        />
      </div>
    </main>
  )
}

export default Dashboard

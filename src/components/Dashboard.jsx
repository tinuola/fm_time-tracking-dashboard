import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'

import { getStats } from '../utils/appData'
// import { applyActiveClass } from '../utils/uiHelpers'

function Dashboard() {
  const [schedule, setSchedule] = useState(0)

  const [stats, setStats] = useState(() => getStats(schedule))

  // UserCard passes index of selected schedule
  // Value of index is used to update states
  const switchSchedule = (freqIdx) => {
    setSchedule(freqIdx)

    setStats(() => getStats(freqIdx))

    // applyActiveClass(freqIdx)
  }

  return (
    <main className='dashboard-container'>
      <div className='user-card-block'>
        <UserCard handleScheduleSelection={switchSchedule} />
      </div>
      <div className='stats-cards-block'>
        <StatCard
          schedule={schedule}
          stats={stats}
        />
      </div>
    </main>
  )
}

export default Dashboard

import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import { getStats } from '../utils/appData'
import { applyActiveClass } from '../utils/uiHelpers'

function Dashboard() {
  const [schedule, setSchedule] = useState('daily')

  const [stats, setStats] = useState(() => getStats(schedule))

  // UserCard passes schedule range and index to set state
  const switchSchedule = (range, index) => {
    setSchedule(range)

    setStats(() => getStats(range))

    applyActiveClass(index)
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

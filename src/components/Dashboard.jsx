import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import { getStats } from '../utils/dataUtil'

function Dashboard() {
  const [schedule, setSchedule] = useState('daily')

  const [stats, setStats] = useState(() => getStats(schedule))

  // UserCard passes schedule range to set state
  const switchSchedule = (range) => {
    setSchedule(range)
    setStats(() => getStats(range))
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

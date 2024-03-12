import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import data from '../data/data.json'

function Dashboard() {
  const ranges = ['daily', 'weekly', 'monthly']
  const [range, setRange] = useState(0)
  const [rangeTitle, setRangeTitle] = useState(ranges[0])

  const user = data.user

  const stats = data.stats.map((stat) => {
    return {
      title: stat.title,
      time: stat.timeframes[ranges[range]].current,
    }
  })

  // When time ranges are clicked, update state
  const switchTimePeriod = (num) => {
    setRange(num)
    setRangeTitle(ranges[num])
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <UserCard
        user={user}
        ranges={ranges}
        handleTimePeriodSelection={switchTimePeriod}
      />
      <StatCard
        rangeTitle={rangeTitle}
        stats={stats}
      />
    </div>
  )
}

export default Dashboard

import { useState } from 'react'
import StatCard from './StatCard'
import UserCard from './UserCard'
import data from '../data/data.json'

function Dashboard() {
  // Data
  const user = data.user
  const periods = data.range

  // Return array of stats
  function stats() {
    return data.stats.map((stat) => {
      return {
        title: stat.title,
        currStat: stat.timeframes[currPeriod].current,
        prevStat: stat.timeframes[currPeriod].previous,
      }
    })
  }

  // States
  const [period, setPeriod] = useState(0)
  const [currPeriod, setCurrPeriod] = useState(periods[period].curr)
  const [prevPeriod, setPrevPeriod] = useState(periods[period].prev)

  // When time period is clicked, update states
  const switchTimePeriod = (num) => {
    setPeriod(num)
    setCurrPeriod(periods[num].curr)
    setPrevPeriod(periods[num].prev)
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
        stats={stats()}
      />
    </div>
  )
}

export default Dashboard

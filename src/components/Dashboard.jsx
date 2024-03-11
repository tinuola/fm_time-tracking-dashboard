import StatCard from './StatCard'
import UserCard from './UserCard'
import data from '../data/data.json'

function Dashboard() {
  const user = data.user
  // console.log(user)

  const stats = data.stats
  // console.log(stats)

  return (
    <div>
      <h2>Dashboard</h2>
      <UserCard user={user} />
      <StatCard stats={stats} />
    </div>
  )
}

export default Dashboard

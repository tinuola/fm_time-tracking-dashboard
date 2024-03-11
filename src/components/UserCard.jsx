// import PropTypes from 'prop-types'

function UserCard({ user }) {
  return (
    <>
      <h3>UserCard</h3>
      <p>{user}</p>
      <ul>
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </>
  )
}

export default UserCard

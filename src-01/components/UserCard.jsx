// import PropTypes from 'prop-types'

function UserCard({ user, ranges, handleTimePeriodSelection }) {
  return (
    <>
      <h3>UserCard</h3>
      <p>{user}</p>
      <div>
        {ranges.map((range, index) => (
          <button
            key={range}
            onClick={() => handleTimePeriodSelection(index)}
          >
            {ranges[index]}
          </button>
        ))}
      </div>
    </>
  )
}

export default UserCard

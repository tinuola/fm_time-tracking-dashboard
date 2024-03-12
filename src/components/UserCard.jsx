import PropTypes from 'prop-types'

function UserCard({ handleTimePeriodSelection, periodBtns, user }) {
  return (
    <>
      <h3>UserCard</h3>
      <p>{user}</p>
      <div>
        {periodBtns.map((period, index) => (
          <button
            key={period}
            onClick={() => handleTimePeriodSelection(index)}
          >
            {periodBtns[index]}
          </button>
        ))}
      </div>
    </>
  )
}

UserCard.propTypes = {
  handleTimePeriodSelection: PropTypes.func,
  periodBtns: PropTypes.array,
  user: PropTypes.string,
}

export default UserCard

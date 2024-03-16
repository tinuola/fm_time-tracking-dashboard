import PropTypes from 'prop-types'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleTimePeriodSelection, periodBtns, user }) {
  return (
    <div className='usercard'>
      {/* <h3>UserCard</h3> */}
      <img
        src={userImage}
        alt=''
      />
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
    </div>
  )
}

UserCard.propTypes = {
  handleTimePeriodSelection: PropTypes.func,
  periodBtns: PropTypes.array,
  user: PropTypes.string,
}

export default UserCard

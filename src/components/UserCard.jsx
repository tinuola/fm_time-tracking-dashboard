import PropTypes from 'prop-types'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleTimePeriodSelection, periodBtns, user }) {
  return (
    <>
      {/* <h3>UserCard</h3> */}
      <div className='user-details-wrapper'>
        <img
          src={userImage}
          alt=''
        />
        <div className='user-details'>
          <p>Report for</p>
          <p>{user}</p>
        </div>
      </div>
      <div className='period-labels-wrapper'>
        {periodBtns.map((period, index) => (
          <button
            className={`period-labels ${index === 0 ? 'active' : ''}`}
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

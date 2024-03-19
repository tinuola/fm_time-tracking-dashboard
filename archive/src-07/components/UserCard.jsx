import PropTypes from 'prop-types'
import { getFrequency, getUser } from '../utils/appData'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleTimePeriodSelection }) {
  const username = getUser()
  const periods = getFrequency()

  return (
    <>
      <div className='user-details-wrapper'>
        <img
          src={userImage}
          alt=''
        />
        <div className='user-details'>
          <p>Report for</p>
          <h2>{username}</h2>
        </div>
      </div>
      <div className='period-labels-wrapper'>
        {periods.map((period, index) => (
          <button
            className={`period-labels ${index === 0 ? 'active' : ''}`}
            key={period}
            onClick={() => handleTimePeriodSelection(index)}
          >
            {periods[index]}
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

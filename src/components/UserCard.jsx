import PropTypes from 'prop-types'
import userImage from '../assets/images/image-jeremy.png'
import appData from '../data/data.json'

function UserCard({ handleTimePeriodSelection }) {
  const user = appData.user
  const periods = appData.range.map((obj) => obj.curr)

  return (
    <>
      <div className='user-details-wrapper'>
        <img
          src={userImage}
          alt=''
        />
        <div className='user-details'>
          <p>Report for</p>
          <h2>{user}</h2>
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

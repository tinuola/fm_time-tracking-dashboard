import { getSchedule, getUser } from '../utils/appData'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleScheduleSelection }) {
  const username = getUser()
  const schedules = getSchedule()
  // console.log(schedules)

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
      <div className='freq-labels-wrapper'>
        {schedules.map((schedule, index) => (
          <button
            className={`freq-labels ${index === 0 ? 'active' : ''}`}
            key={schedule}
            onClick={() => handleScheduleSelection(index)}
          >
            {schedules[index]}
          </button>
        ))}
      </div>
    </>
  )
}

export default UserCard

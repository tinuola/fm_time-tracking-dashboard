import { useRef } from 'react'
import { getSchedule, getUser } from '../utils/dataUtil'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleScheduleSelection }) {
  const username = getUser()
  const schedules = getSchedule()
  const rangeRef = useRef('daily')

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
        {schedules.map((schedule) => (
          <button
            className={`freq-labels ${
              schedule === rangeRef.current ? 'active' : ''
            }`}
            key={schedule}
            ref={rangeRef}
            onClick={() => {
              handleScheduleSelection(schedule)
              rangeRef.current = schedule
            }}
          >
            {schedule}
          </button>
        ))}
      </div>
    </>
  )
}

export default UserCard

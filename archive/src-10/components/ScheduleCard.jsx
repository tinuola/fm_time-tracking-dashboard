import { useRef } from 'react'
import { getSchedule } from '../utils/dataUtil'

function ScheduleCard({ handleScheduleSelection }) {
  const schedules = getSchedule()
  const rangeRef = useRef('daily')

  return (
    <>
      <div className='schedule-labels-wrapper'>
        {schedules.map((schedule) => (
          <button
            className={`schedule-labels ${
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

export default ScheduleCard

import { useRef } from 'react'
import { getSchedule } from '../utils/dataUtil'

function ScheduleCard({ handleScheduleSelection }) {
  const schedules = getSchedule()
  const rangeRef = useRef('daily')

  return (
    <>
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

export default ScheduleCard

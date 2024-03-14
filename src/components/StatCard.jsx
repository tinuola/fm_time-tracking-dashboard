import PropTypes from 'prop-types'
import iconEllipsis from '../assets/images/icon-ellipsis.svg'
import verifyStorage from '../utils/verifyStorage'

function StatCard({ currPeriod, prevPeriod, stats, getUpdatedDailyValue }) {
  const showEditField = (idx) => {
    console.log('Display an input field!')
    document.querySelectorAll('form')[idx].classList.toggle('form')
  }

  // const getUpdatedDailyValue = (idx) => {
  //   let inputFields = document.querySelectorAll('input')
  //   if (inputFields[idx].value) {
  //     console.log('Updated value is: ', inputFields[idx].value)
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <>
      <h3>StatCard</h3>
      <p>Display {currPeriod} Stats</p>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.title}: {stat.currStat} hour
            {stat.currStat > 1 && `s`}
            <p>
              {prevPeriod}:{' '}
              <span>
                {stat.prevStat} hour
                {stat.prevStat > 1 && `s`}
              </span>
            </p>
            {/* Display edit icon only if selection is 'Daily' and browser accepts storage */}
            {currPeriod === 'daily' && verifyStorage('localStorage') && (
              <>
                <span>Edit </span>
                <button onClick={() => showEditField(index)}>
                  <img
                    src={iconEllipsis}
                    alt=''
                  />
                </button>
                <form
                  // onSubmit={handleSubmit}
                  onSubmit={(e) => getUpdatedDailyValue(e, index)}
                  className='form'
                >
                  <input
                    type='number'
                    name=''
                    id=''
                    className='input'
                  />
                  {/* <button onClick={() => getUpdatedDailyValue(index)}> */}
                  <button type='submit'>Update</button>
                </form>
                <br />
                <br />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

StatCard.propTypes = {
  currPeriod: PropTypes.string,
  prevPeriod: PropTypes.string,
  stats: PropTypes.array,
}

export default StatCard

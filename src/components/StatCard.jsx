import StatForm from './StatForm'
import PropTypes from 'prop-types'
import iconEllipsis from '../assets/images/icon-ellipsis.svg'
import verifyStorage from '../utils/verifyStorage'

function StatCard({ stats, currPeriod, prevPeriod, getUpdatedDailyValue }) {
  //
  const showEditField = (idx) => {
    document.querySelectorAll('form')[idx].classList.toggle('formElem')
  }

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
            {currPeriod === 'daily' && verifyStorage('sessionStorage') && (
              <>
                <span>Edit </span>
                <button onClick={() => showEditField(index)}>
                  <img
                    src={iconEllipsis}
                    alt=''
                  />
                </button>

                <StatForm
                  index={index}
                  getUpdatedDailyValue={getUpdatedDailyValue}
                />
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
  stats: PropTypes.array,
  currPeriod: PropTypes.string,
  prevPeriod: PropTypes.string,
  getUpdatedDailyValue: PropTypes.func,
}

export default StatCard

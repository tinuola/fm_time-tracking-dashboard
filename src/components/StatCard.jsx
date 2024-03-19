import PropTypes from 'prop-types'
import StatForm from './StatForm'
import { getRange } from '../utils/appData'
import verifyStorage from '../utils/verifyStorage'
import iconEllipsis from '../assets/images/icon-ellipsis.svg'

function StatCard({ stats, period, getUpdatedDailyValue }) {
  const { currPeriod, prevPeriod } = getRange(period)

  const showEditField = (idx) => {
    let forms = document.querySelectorAll('form')
    forms[idx].classList.toggle('form-visible')
    forms[idx].lastElementChild.innerText = ``

    let inputFields = document.querySelectorAll('input')
    let dailyField = inputFields[idx]
    dailyField.value = ''
  }

  return (
    <>
      <ul className='stats-cards-wrapper'>
        {stats.map((stat, index) => (
          <li
            key={index}
            className='stat-card'
          >
            <div className='stat-card-inner-wrapper'>
              <header className='stat-card-header'>
                <h3>{stat.title}</h3>
                {/* Display edit icon only if selection is 'Daily' and browser accepts storage */}
                {currPeriod === 'daily' && verifyStorage('sessionStorage') && (
                  <>
                    <button onClick={() => showEditField(index)}>
                      <img
                        src={iconEllipsis}
                        alt=''
                      />
                      <span className='sr-only'>
                        {' '}
                        Edit daily {stat.title} hours
                      </span>
                    </button>
                  </>
                )}
              </header>
              <div>
                <StatForm
                  index={index}
                  getUpdatedDailyValue={getUpdatedDailyValue}
                />
                <h4 className='stat-card-value'>
                  {stat.currStat}hr
                  {stat.currStat > 1 && `s`}
                </h4>
                <div className='stat-card-footer'>
                  <p>
                    {prevPeriod} - {stat.prevStat}hr
                    {stat.prevStat > 1 && `s`}
                  </p>
                </div>
              </div>
            </div>
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

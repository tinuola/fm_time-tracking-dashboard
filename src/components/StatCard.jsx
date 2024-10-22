// Remove proptypes
import PropTypes from 'prop-types'

// Components, Assets
import StatForm from './StatForm'
import iconEllipsis from '../assets/images/icon-ellipsis.svg'

// Helpers
import { showEditForm } from '../utils/uiElemHelpers'
import verifyStorage from '../utils/verifyStorage'

function StatCard({ stats, frequency, getUpdatedDailyValue }) {
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
                {frequency === 0 && verifyStorage('sessionStorage') && (
                  <>
                    <button
                      onClick={() => showEditForm(index)}
                      className='edit-btn'
                    >
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
                    {frequency === 1
                      ? `last week`
                      : frequency === 2
                      ? `last month`
                      : `yesterday`}{' '}
                    - {stat.prevStat}hr
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
  frequency: PropTypes.number,
  getUpdatedDailyValue: PropTypes.func,
}

export default StatCard

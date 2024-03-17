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
      {/* <h3>StatCard</h3>
      <p>Display {currPeriod} Stats</p> */}
      <ul className='stats-cards-wrapper'>
        {stats.map((stat, index) => (
          <li
            key={index}
            className='stat-card'
          >
            <div className='stat-card-inner-wrapper'>
              <header className='stat-card-header'>
                <p>{stat.title}</p>
                {/* Display edit icon only if selection is 'Daily' and browser accepts storage */}
                {currPeriod === 'daily' && verifyStorage('sessionStorage') && (
                  <>
                    {/* <span>Edit </span> */}
                    <button onClick={() => showEditField(index)}>
                      <img
                        src={iconEllipsis}
                        alt=''
                      />
                      <span className='sr-only'>
                        {' '}
                        Edit Daily {stat.title} Hours
                      </span>
                    </button>

                    <StatForm
                      index={index}
                      getUpdatedDailyValue={getUpdatedDailyValue}
                    />
                  </>
                )}
              </header>
              <p className='stat-card-value'>
                {stat.currStat}hr
                {stat.currStat > 1 && `s`}
              </p>
              <footer className='stat-card-footer'>
                <p>
                  {prevPeriod} - {stat.prevStat}hr
                  {stat.prevStat > 1 && `s`}
                </p>
              </footer>
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

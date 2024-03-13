import PropTypes from 'prop-types'
import verifyStorage from '../utils/verifyStorage'

function StatCard({ currPeriod, prevPeriod, stats }) {
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
            {currPeriod === 'daily' && verifyStorage('localStorage') && (
              <>
                <p>Yes, there's storage </p>
                <img
                  src=''
                  alt=''
                />
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

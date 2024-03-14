import PropTypes from 'prop-types'

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

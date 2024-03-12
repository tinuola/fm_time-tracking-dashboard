// import PropTypes from 'prop-types'

function StatCard({ stats, rangeTitle }) {
  return (
    <>
      <h3>StatCard</h3>
      <p>Display {rangeTitle} Stats</p>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.title}: {stat.time} hour
            {stat.time > 1 && `s`}
          </li>
        ))}
      </ul>
    </>
  )
}

StatCard.propTypes = {}

export default StatCard

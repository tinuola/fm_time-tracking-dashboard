import React from 'react'
// import PropTypes from 'prop-types'

function StatCard({ stats }) {
  return (
    <>
      <h3>StatCard</h3>
      <p>Display Daily Stats</p>
      <ul>
        {stats.map((stat, index) => (
          <li key={index}>
            {stat.title}: {stat.timeframes.daily.current} hour
            {stat.timeframes.daily.current > 1 && `s`}
          </li>
        ))}
      </ul>
    </>
  )
}

StatCard.propTypes = {}

export default StatCard

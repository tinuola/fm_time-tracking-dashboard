// import PropTypes from 'prop-types'

function StatCard({ stats, rangeTitle, pastRange }) {
  return (
    <>
      <h3>StatCard</h3>
      <p>Display {rangeTitle} Stats</p>
      <ul>
        {stats.map((stat, index) => (
          // let test
          // eslint-disable-next-line default-case
          // switch (index) {
          //   case 0:
          //     test = `Yesterday`
          //     break
          //   case 1:
          //     test = `Last Week`
          //     break
          //   case 2:
          //     test = `Last Month`
          //     break
          // }

          <li key={index}>
            {stat.title}: {stat.currStat} hour
            {stat.currStat > 1 && `s`}
            <p>
              {pastRange}:
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

StatCard.propTypes = {}

export default StatCard

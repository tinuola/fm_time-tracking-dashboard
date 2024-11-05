function StatCard({ stats, schedule }) {
  return (
    <>
      <ul className='stats-cards-wrapper'>
        {stats.map((stat) => (
          <li
            key={`${schedule}-${stat.title}`}
            className='stat-card'
          >
            <div className='stat-card-inner-wrapper'>
              <header className='stat-card-header'>
                <h3>{stat.title}</h3>
              </header>
              <div>
                <h4 className='stat-card-value'>
                  {stat.currStat}hr
                  {stat.currStat > 1 && `s`}
                </h4>
                <div className='stat-card-footer'>
                  <p>
                    {schedule === 'weekly'
                      ? 'last week'
                      : schedule === 'monthly'
                      ? 'last month'
                      : 'yesterday'}{' '}
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

export default StatCard

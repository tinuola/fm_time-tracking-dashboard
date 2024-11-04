import appData from '../data/data.json'

function getUser() {
  return appData.user
}

function getSchedule() {
  return ['daily', 'weekly', 'monthly']
}

// Return array of stats (hours)
function getStats(range) {
  let data = appData.stats.map((stat) => {
    return {
      title: stat.title,
      currStat: stat.timeframes[range].current,
      prevStat: stat.timeframes[range].previous,
    }
  })

  return data
}

export { getUser, getSchedule, getStats }

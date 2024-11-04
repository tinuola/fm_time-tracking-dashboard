import appData from '../data/data.json'

function getUser() {
  return appData.user
}

function getSchedule() {
  return ['daily', 'weekly', 'monthly']
}

// Return array of categories: ['work', 'play', etc]
// function getCategories() {
//   const categories = appData.stats.map((obj) => obj.title)
//   return categories
// }

// Return array of stats (hours)
function getStats(freqIdx) {
  let schedule = getSchedule()[freqIdx]

  // Array of objects: {category name, current time, previous time}
  let data = appData.stats.map((stat) => {
    return {
      title: stat.title,
      currStat: stat.timeframes[schedule].current,
      prevStat: stat.timeframes[schedule].previous,
    }
  })

  return data
}

export { getUser, getSchedule, /*getCategories,*/ getStats }

import appData from '../data/data.json'

function getUser() {
  return appData.user
}

function getFrequency() {
  return ['daily', 'weekly', 'monthly']
}

// Return array of categories: ['work', 'play', etc]
function getCategories() {
  const categories = appData.stats.map((obj) => obj.title)
  return categories
}

// Return array of stats (hours)
function getStats(freqIdx) {
  let frequency = getFrequency()[freqIdx]

  // Array of objects: {category name, current time, previous time}
  let data = appData.stats.map((stat) => {
    return {
      title: stat.title,
      currStat: stat.timeframes[frequency].current,
      prevStat: stat.timeframes[frequency].previous,
    }
  })

  return data
}

export { getUser, getFrequency, getCategories, getStats }

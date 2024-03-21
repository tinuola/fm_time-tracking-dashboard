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

  /***  Session Storage logic: ***/

  // if daily frequency and there's nothing in storage,
  // add data to storage, return data

  // if daily frequency and data is stored, return stored data;
  // (stored data should be most up to date version of daily
  // data, after update by updateDailyValue function in Dashboard)

  // else return data

  if (freqIdx === 0 && !sessionStorage.getItem('dailyStats')) {
    sessionStorage.setItem('dailyStats', JSON.stringify(data))
    return data
  } else if (freqIdx === 0 && sessionStorage.getItem('dailyStats')) {
    let updatedDailyStats = JSON.parse(sessionStorage.getItem('dailyStats'))
    return updatedDailyStats
  } else {
    return data
  }
}

export { getUser, getFrequency, getCategories, getStats }

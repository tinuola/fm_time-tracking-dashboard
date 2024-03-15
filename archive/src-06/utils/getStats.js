import appData from '../data/data.json'

// Return array of stats
function getStats(num) {
  const periods = appData.range

  // string values: 'daily', 'weekly', 'monthly'
  // to use as computed properties in data objects
  let currPeriod = periods[num].curr

  // Array of objects: {category name, current time, previous time}
  let data = appData.stats.map((stat) => {
    return {
      title: stat.title,
      currStat: stat.timeframes[currPeriod].current,
      prevStat: stat.timeframes[currPeriod].previous,
    }
  })

  /***  Session Storage logic: ***/

  // if daily period and there's nothing in storage,
  // add data to storage, return data

  // if daily period and data is stored, return stored data;
  // (stored data should be most up to date version of daily
  // data, after update by updateDailyValue function

  // else return data

  if (num === 0 && !sessionStorage.getItem('dailyStats')) {
    sessionStorage.setItem('dailyStats', JSON.stringify(data))
    return data
  } else if (num === 0 && sessionStorage.getItem('dailyStats')) {
    let updatedDailyStats = JSON.parse(sessionStorage.getItem('dailyStats'))
    return updatedDailyStats
  } else {
    return data
  }
}

export default getStats

function calculateHours(array, index, newValue) {
  let dailyStatsArray = array.map((item) => item.currStat)
  // console.log('array: ', dailyStatsArray)

  let dailyStatsTotal = dailyStatsArray.reduce((a, b) => a + b)
  // console.log('current array sum: ', dailyStatsTotal)

  let newStatsTotal = dailyStatsTotal - dailyStatsArray[index] + newValue
  // console.log('updated array sum: ', newStatsTotal)

  return newStatsTotal
}

export default calculateHours

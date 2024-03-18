import PropTypes from 'prop-types'
import appData from '../data/data.json'

function StatForm({ getUpdatedDailyValue, index }) {
  const titles = appData.stats.map((obj) => obj.title)
  return (
    <>
      <form
        onSubmit={(e) => getUpdatedDailyValue(e, index)}
        className='formElem'
      >
        <label
          htmlFor={`stat-input-${titles[index]}`}
          className='sr-only'
        >
          {`Enter daily ${titles[index]} hours`}
        </label>
        <div>
          <input
            type='number'
            name=''
            id={`stat-input-${titles[index]}`}
            placeholder={`Enter daily ${titles[index]} hours`}
          />
          <button type='submit'>Update</button>
        </div>
        <p className='error-msg'></p>
      </form>
    </>
  )
}

StatForm.propTypes = {
  index: PropTypes.number,
  getUpdatedDailyValue: PropTypes.func,
}

export default StatForm

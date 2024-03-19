import PropTypes from 'prop-types'
import { getCategories } from '../utils/appData'

function StatForm({ getUpdatedDailyValue, index }) {
  const categories = getCategories()

  let errorFields = document.querySelectorAll('.error-msg')

  return (
    <>
      <form
        onSubmit={(e) => getUpdatedDailyValue(e, index)}
        className='formElem'
      >
        <label
          htmlFor={`stat-input-${categories[index]}`}
          className='sr-only'
        >
          {`Enter daily ${categories[index]} hours`}
        </label>
        <div>
          <input
            type='number'
            name=''
            id={`stat-input-${categories[index]}`}
            placeholder={`Enter daily ${categories[index]} hours`}
            onChange={() => (errorFields[index].innerText = '')}
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

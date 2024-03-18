import PropTypes from 'prop-types'

function StatForm({ getUpdatedDailyValue, index }) {
  return (
    <>
      <form
        onSubmit={(e) => getUpdatedDailyValue(e, index)}
        className='formElem'
      >
        <label
          htmlFor={`stat-input-${index}`}
          className='sr-only'
        >
          Enter New Daily Hours
        </label>
        <div>
          <input
            type='number'
            name=''
            id={`stat-input-${index}`}
            placeholder='Enter new daily hours'
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

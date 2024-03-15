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
        <input
          type='number'
          name=''
          id={`stat-input-${index}`}
          className='inputElem'
        />
        <button type='submit'>Update</button>
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

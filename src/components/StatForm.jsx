function StatForm({ getUpdatedDailyValue, index }) {
  return (
    <>
      <form
        onSubmit={(e) => getUpdatedDailyValue(e, index)}
        className='formElem'
      >
        <input
          type='number'
          name=''
          id=''
          className='inputElem'
        />
        <button type='submit'>Update</button>
        <p className='error-msg'></p>
      </form>
    </>
  )
}

export default StatForm

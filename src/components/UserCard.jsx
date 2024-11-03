import { getFrequency, getUser } from '../utils/appData'
import userImage from '../assets/images/image-jeremy.png'

function UserCard({ handleFrequencySelection }) {
  const username = getUser()
  const frequencies = getFrequency()

  return (
    <>
      <div className='user-details-wrapper'>
        <img
          src={userImage}
          alt=''
        />
        <div className='user-details'>
          <p>Report for</p>
          <h2>{username}</h2>
        </div>
      </div>
      <div className='freq-labels-wrapper'>
        {frequencies.map((freq, index) => (
          <button
            className={`freq-labels ${index === 0 ? 'active' : ''}`}
            key={freq}
            onClick={() => handleFrequencySelection(index)}
          >
            {frequencies[index]}
          </button>
        ))}
      </div>
    </>
  )
}

export default UserCard

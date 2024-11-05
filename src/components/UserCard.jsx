import { getUser } from '../utils/dataUtil'
import userImage from '../assets/images/image-jeremy.png'

function UserCard() {
  const username = getUser()

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
    </>
  )
}

export default UserCard

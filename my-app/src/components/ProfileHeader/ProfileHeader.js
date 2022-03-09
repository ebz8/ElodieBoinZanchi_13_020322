import './ProfileHeader.scss'

const ProfileHeader = ({firstName, lastName}) => {
  return (
    <div className="profile-header">
      <h1>Welcome back <br /> {firstName + ' ' + lastName}!</h1>
      <button className="main-button">Edit Name</button>
    </div>
  )
}

export default ProfileHeader
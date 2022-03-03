import './ProfileHeader.scss'

const ProfileHeader = ({userName}) => {
  return (
    <div className="profile-header">
      <h1>Welcome back <br /> {userName}!</h1>
      <button className="main-button">Edit Name</button>
    </div>
  )
}

export default ProfileHeader
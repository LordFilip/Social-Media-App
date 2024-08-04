import Navbar from '../components/Navbar/Navbar'
import useGetUser from '../hooks/useGetUser'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/no-profile-photo.jpg' // Placeholder for cover photo
import coverPhoto from '../../public/assets/no-cover-photo.jpg' // Placeholder for cover photo
import LeftSidebar from '../components/ProfilePage/LeftSidebar'
import RightSidebar from '../components/ProfilePage/RightSidebar'

const ProfilePage = () => {
  const { user, loading, error } = useGetUser()

  if (loading) {
    return <div className={styles.loading}>Loading...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  if (!user) {
    return
  }

  return (
    <div className={styles.profilePageContainer}>
      <Navbar />
      <div className={styles.coverPhoto}>
        <img src={coverPhoto} alt="Cover" className={styles.coverImage} />
        <button className={styles.coverButton}>Edit cover photo</button>
        <div className={styles.profilePhoto}>
          <img
            src={user.profilePicURL || image}
            alt="Profile"
            className={styles.profileImage}
          />
        </div>
      </div>
      <div className={styles.username}>
        <h1>@{user.username}</h1>
      </div>
      <div className={styles.innerContainer}>
        <LeftSidebar />
        <RightSidebar username={user.username} />
      </div>
    </div>
  )
}

export default ProfilePage

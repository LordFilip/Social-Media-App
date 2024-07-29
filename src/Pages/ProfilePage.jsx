import Navbar from '../components/Navbar/Navbar'
import useGetUser from '../hooks/useGetUser'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/auth-image.jpg' // Placeholder for cover photo
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
    return <div className={styles.error}>User not found</div>
  }

  return (
    <div className={styles.profilePageContainer}>
      <Navbar />
      <div className={styles.coverPhoto}>
        <img src={image} alt="Cover" className={styles.coverImage} />
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

/*
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import useGetUser from '../hooks/useGetUser'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/auth-image.jpg'
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
    return <div className={styles.error}>User not found</div>
  }

  return (
    <div className={styles.profilePageContainer}>
      <Navbar />
      <div className={styles.coverPhoto}>
        <img src={image} alt="Cover" />
        <div className={styles.profilePhoto}>
          <img src={image} alt="Profile" />
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
*/

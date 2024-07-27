import Navbar from '../components/Navbar/Navbar'
import useGetPosts from '../hooks/useGetPosts'
import styles from './Styles/ProfilePage.module.css'
import image from '../../public/assets/auth-image.jpg'
import LeftSidebar from '../components/ProfilePage/LeftSidebar'
import RightSidebar from '../components/ProfilePage/RightSidebar'

const ProfilePage = () => {
  /*const { posts, loading, error } = useGetPosts()*/

  return (
    <div className={styles.profilePageContainer}>
      <Navbar />
      <div className={styles.coverPhoto}>
        <img src={image} alt="" />
        <div className={styles.profilePhoto}>
          <img src={image} alt="" />
        </div>
      </div>
      <div className={styles.username}>
        <h1>@miuilors</h1>
      </div>
      <h1>Profile Page</h1>
      <div className={styles.innerContainer}>
        <LeftSidebar></LeftSidebar>
        <RightSidebar></RightSidebar>
      </div>
    </div>
  )
}

export default ProfilePage

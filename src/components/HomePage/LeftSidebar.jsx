import styles from './Styles/LeftSidebar.module.css'
import { useNavigate } from 'react-router-dom'
import useLogOut from '../../hooks/useLogOut'
import { CiHome } from 'react-icons/ci'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { LiaUserFriendsSolid } from 'react-icons/lia'
import { LuMessageSquare } from 'react-icons/lu'

const LeftSidebar = () => {
  // eslint-disable-next-line no-unused-vars
  const { handleLogOut, loading, error } = useLogOut()

  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/auth')
    handleLogOut()
  }

  return (
    <div className={styles.LeftSidebar}>
      <div className={styles.upper}>
        <h1>Logo</h1>
        <ul>
          <li onClick={() => navigate('/profilepage')}>
            <CiHome className={styles.icon} />
            <p>Profile</p>
          </li>
          <li onClick={() => navigate('/notifications')}>
            <IoIosNotificationsOutline className={styles.icon} />
            <p>Notifications</p>{' '}
          </li>
          <li onClick={() => navigate('/friends')}>
            <LiaUserFriendsSolid className={styles.icon} />
            <p>Friends</p>{' '}
          </li>
          <li>
            <LuMessageSquare className={styles.icon} />
            <p>Messages</p>{' '}
          </li>
          <li>
            <p>Posts</p>
          </li>
        </ul>
      </div>
      <div className={styles.down}>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  )
}

export default LeftSidebar

import styles from './Styles/LeftSidebar.module.css'
import { useNavigate } from 'react-router-dom'
import useLogOut from '../../hooks/useLogOut'

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
          <li onClick={() => navigate('/profilepage')}>Profile</li>
          <li onClick={() => navigate('/notifications')}>Notifications</li>
          <li onClick={() => navigate('/friends')}>Friends</li>
          <li>Messages</li>
          <li>Posts</li>
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

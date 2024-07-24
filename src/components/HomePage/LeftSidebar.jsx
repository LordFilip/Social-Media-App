import styles from './Styles/LeftSidebar.module.css'
import { useNavigate } from 'react-router-dom'

const LeftSidebar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/auth')
  }
  return (
    <div className={styles.LeftSidebar}>
      <div className={styles.upper}>
        <h1>Logo</h1>
        <ul>
          <li>Feed</li>
          <li>Posts</li>
          <li>Friends</li>
          <li>bidonisavanje</li>
          <li>glupotinje</li>
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

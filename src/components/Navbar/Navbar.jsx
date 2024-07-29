import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.navbarLeft}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.inputNavbar}
        />
      </div>

      <ul>
        <li onClick={() => navigate('/profilepage')}>Profile</li>
        <li onClick={() => navigate('/homepage')}>Homepage</li>
        <li onClick={() => navigate('/friends')}>Friends</li>
        <li>Settings</li>
      </ul>
      <div className={styles.navbarRight}></div>
    </div>
  )
}

export default Navbar

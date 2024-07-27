import styles from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <ul>
        <li onClick={() => navigate('/profilepage')}>Profile</li>
        <li onClick={() => navigate('/homepage')}>Homepage</li>
        <li onClick={() => navigate('/friends')}>Friends</li>
        <li>Settings</li>
      </ul>
    </div>
  )
}

export default Navbar

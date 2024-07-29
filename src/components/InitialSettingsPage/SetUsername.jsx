import { useState } from 'react'
import useSetUsername from '../../hooks/useSetUsername' // Adjust the path as necessary
import styles from './SetUsername.module.css'

const SetUsername = ({ setIsUsername }) => {
  const [username, setUsernameState] = useState('')
  const { setUsername, loading, error } = useSetUsername()

  const handleContinue = async () => {
    if (username.trim() === '') {
      alert('Username cannot be empty')
      return
    }

    const success = await setUsername(username)
    if (success) {
      // Navigate to another page or show success message
      setIsUsername(true)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1>WELCOME</h1>
        <label>Please choose your username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsernameState(e.target.value)}
        />
        <button onClick={handleContinue} disabled={loading}>
          {loading ? 'Setting...' : 'Continue'}
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  )
}

export default SetUsername

import { useState, useEffect } from 'react'
import useSetUsername from '../../hooks/useSetUsername' // Adjust the path as necessary
import useCheckUsername from '../../hooks/useCheckUsername' // Adjust the path as necessary
import styles from './SetUsername.module.css'

const SetUsername = ({ setIsUsername }) => {
  const [username, setUsernameState] = useState('')
  const {
    setUsername,
    loading: setUsernameLoading,
    error: setUsernameError,
  } = useSetUsername()
  const {
    isUsernameAvailable,
    loading: checkUsernameLoading,
    error: checkUsernameError,
  } = useCheckUsername(username)

  const handleContinue = async () => {
    if (username.trim() === '') {
      alert('Username cannot be empty')
      return
    }

    if (!isUsernameAvailable) {
      alert('Username is already taken')
      return
    }

    const success = await setUsername(username)
    if (success) {
      // Navigate to another page or show success message
      setIsUsername(true)
    }
  }

  // Optional: Add a useEffect to show real-time feedback about username availability
  useEffect(() => {
    if (username.trim() !== '') {
      // This will check username availability as user types
      // You can also use debouncing to reduce the number of API calls
    }
  }, [username, isUsernameAvailable])

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
        <button
          onClick={handleContinue}
          disabled={setUsernameLoading || checkUsernameLoading}
        >
          {setUsernameLoading ? 'Setting...' : 'Continue'}
        </button>

        {checkUsernameError && (
          <p className={styles.error}>{checkUsernameError}</p>
        )}
        {!isUsernameAvailable && username.trim() !== '' && (
          <p className={styles.error}>Username is already taken</p>
        )}
        {setUsernameError && <p className={styles.error}>{setUsernameError}</p>}
      </div>
    </div>
  )
}

export default SetUsername

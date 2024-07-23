import styles from './Styles/LoginForm.module.css'
import { useState } from 'react'

const LoginForm = ({ setIsLogin, setModal }) => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
      setModal(true)
    } else if (inputs.password !== inputs.confirmPassword) {
      alert('Passwords do not match')
    } else {
      // Proceed with form submission logic
      console.log('Form submitted successfully')
    }
  }

  const handleFocus = () => {
    setModal(false)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.formTitle}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email..."
            onFocus={handleFocus}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Your password..."
            onFocus={handleFocus}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <p>
            Do not have an account yet.{' '}
            <span onClick={() => setIsLogin(false)}>Let's sign up</span>
          </p>
        </div>
        <div className={styles.row}>
          <button className={styles.authFormButton} type="submit">
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

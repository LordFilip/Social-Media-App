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

  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email..."
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Your password..."
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Confirm your password..."
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className={styles.row}>
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)}>Lets log in</span>
          </p>
        </div>
        <div className={styles.row}>
          <button className={styles.authFormButton} type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

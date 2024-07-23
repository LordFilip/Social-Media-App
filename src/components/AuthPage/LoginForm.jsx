import styles from './Styles/LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const LoginForm = ({ setIsLogin, setModal, error, setError }) => {
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission behavior
    if (!inputs.email || !inputs.password) {
      setModal(true)
      setError('Please fill all the inputs')

      return
    } else {
      // Proceed with form submission logic
      navigate('/homepage')
    }
  }

  const handleFocus = () => {
    setModal(false)
    setError(false)
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
            className={error ? styles.inputError : ''}
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
            className={error ? styles.inputError : ''}
          />
        </div>
        <div className={styles.row}>
          <p>
            Do not have an account yet.{' '}
            <span
              onClick={() => {
                setIsLogin(false)
                setModal(false)
                setError(false)
              }}
            >
              Let s sign up
            </span>
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

import styles from './Styles/LoginForm.module.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import useLogin from '../../hooks/useLogIn' // Adjust the import path based on your project structure

const LoginForm = ({ setIsLogin, setModal, error, setError }) => {
  const { loading, error: loginError, login } = useLogin() // Use the custom hook for login
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault() // Prevent default form submission behavior

    // Validate inputs
    if (!inputs.email || !inputs.password) {
      setModal(true)
      setError('Please fill all the inputs')
      return
    }

    try {
      const success = await login(inputs)

      if (success) {
        // Redirect to homepage on successful login
        navigate('/homepage')
      } else {
        // Handle login failure
        setModal(true)
        setError(loginError || 'An unexpected error occurred during login')
      }
    } catch (err) {
      // Handle any unexpected errors
      setModal(true)
      setError(err.message || 'An unexpected error occurred during login')
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
            value={inputs.email}
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
            value={inputs.password}
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
              Let’s sign up
            </span>
          </p>
        </div>
        <div className={styles.row}>
          <button
            className={styles.authFormButton}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Logging In...' : 'Log In'}
          </button>
        </div>
        {error && <div className={styles.error}>{error}</div>}
      </form>
    </div>
  )
}

export default LoginForm

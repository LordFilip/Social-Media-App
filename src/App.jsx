import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App

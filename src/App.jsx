import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default App

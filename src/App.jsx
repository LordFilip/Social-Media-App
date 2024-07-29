import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthPage from './Pages/AuthPage'
import HomePage from './Pages/HomePage'
import ProfilePage from './Pages/ProfilePage'
import NotificationsPage from './Pages/NotificationsPage'
import Friends from './Pages/Friends'
import InitialSettingsPage from './Pages/InitialSettingsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/initialsettings" element={<InitialSettingsPage />} />
      </Routes>
    </Router>
  )
}

export default App

import SetUsername from '../components/InitialSettingsPage/SetUsername'
import ProfilePhotoUploader from '../components/InitialSettingsPage/ProfilePhotoUploader'
import { useState } from 'react'
const InitialSettingsPage = () => {
  const [isUsername, setIsUsername] = useState(false)
  return (
    <div>
      {!isUsername ? (
        <SetUsername setIsUsername={setIsUsername} />
      ) : (
        <ProfilePhotoUploader />
      )}
    </div>
  )
}

export default InitialSettingsPage

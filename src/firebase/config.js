import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBVjTJ74l8GW9rhpqRK5tu8b1dyk0HWd2M',
  authDomain: 'social-media-d45f9.firebaseapp.com',
  projectId: 'social-media-d45f9',
  storageBucket: 'social-media-d45f9.appspot.com',
  messagingSenderId: '120245522430',
  appId: '1:120245522430:web:614b6f6d6389d3a086baaf',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }

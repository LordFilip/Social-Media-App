import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAeRShdlIhXFY1lhNhpduyhYSxhy-Ymwd4',
  authDomain: 'social-media-app-fafb8.firebaseapp.com',
  projectId: 'social-media-app-fafb8',
  storageBucket: 'social-media-app-fafb8.appspot.com',
  messagingSenderId: '70598245159',
  appId: '1:70598245159:web:b138c6010c243cc7ca8702',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
  databaseURL: 'https://' + process.env.REACT_APP_PROJECT_ID + '.firebaseio.com',
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PROJECT_ID + '.appspot.com',
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
export default firebase
export const db = firebase.firestore()

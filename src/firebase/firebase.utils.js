import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAptCp8slS0pzpxfQWsBSVvLqGCA8veJbg",
  authDomain: "crwn-db-a02ea.firebaseapp.com",
  databaseURL: "https://crwn-db-a02ea.firebaseio.com",
  projectId: "crwn-db-a02ea",
  storageBucket: "",
  messagingSenderId: "50615255103",
  appId: "1:50615255103:web:cff508d3877d33d2daf88a",
  measurementId: "G-MP4HBQFS30"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
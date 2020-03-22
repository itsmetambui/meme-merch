import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var config = {
  apiKey: "AIzaSyAorBSijm_ZOWqdcdLNUboA58dKVspreFY",
  authDomain: "crown-ecommer.firebaseapp.com",
  databaseURL: "https://crown-ecommer.firebaseio.com",
  projectId: "crown-ecommer",
  storageBucket: "crown-ecommer.appspot.com",
  messagingSenderId: "437587632386",
  appId: "1:437587632386:web:9c40c761740083c888e21b",
  measurementId: "G-7NBXNNXR4R",
}

firebase.initializeApp(config)

const auth = firebase.auth()
const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
const signInWithGoogle = () => auth.signInWithPopup(provider)

const createUserProfileDocument = async (
  userAuth: firebase.User | null,
  additionalData?: any,
): Promise<firebase.firestore.DocumentReference<
  firebase.firestore.DocumentData
> | null> => {
  if (!userAuth) return null
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.error("Error creating user", error.message)
    }
  }

  return userRef
}

export default firebase
export { auth, firestore, signInWithGoogle, createUserProfileDocument }

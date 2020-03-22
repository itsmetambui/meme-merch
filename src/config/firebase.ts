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

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

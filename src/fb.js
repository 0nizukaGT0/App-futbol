import firebase from 'firebase/app'
import 'firebase/firestore' // esto es para importar la base de dato de firestore
import 'firebase/auth'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyAafL8wLO16MPyyFEk_ugbqBdF3uIYcu4Y',
  authDomain: 'prueba-c9ceb.firebaseapp.com',
  databaseURL: 'https://prueba-c9ceb.firebaseio.com',
  projectId: 'prueba-c9ceb',
  storageBucket: 'prueba-c9ceb.appspot.com',
  messagingSenderId: '73163749868'
}
firebase.initializeApp(config)
let proovedor = new firebase.auth.GoogleAuthProvider()
const fire = {
  auth: firebase.auth(),
  db: firebase.firestore(),
  provider: proovedor
}
export default fire

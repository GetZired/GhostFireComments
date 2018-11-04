import firebase from 'firebase/app'
import 'firebase/auth'

const Signout = () => {
	firebase.auth().signOut();
}

module.exports = Signout

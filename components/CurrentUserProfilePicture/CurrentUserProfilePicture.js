import firebase from 'firebase/app'
import 'firebase/auth'

const CurrentUserProfilePicture = () => {
	return firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png'; // not implemented
}

module.exports = CurrentUserProfilePicture

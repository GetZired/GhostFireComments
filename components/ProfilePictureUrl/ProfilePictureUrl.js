import firebase from 'firebase/app';
import 'firebase/auth'

const ProfilePictureUrl = () => (
	firebase.auth().currentUser.photoURL || '/images/profile_placeholder.png'
)

module.exports = ProfilePictureUrl

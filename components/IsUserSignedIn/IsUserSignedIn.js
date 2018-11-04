import firebase from 'firebase/app';
import 'firebase/auth'

/**
 * @return Boolean
 * Returns true if a user is signed-in.
 */
const IsUserSignedIn = () => (
	!!firebase.auth().currentUser
)

module.exports = IsUserSignedIn

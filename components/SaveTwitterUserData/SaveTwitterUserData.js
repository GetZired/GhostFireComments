import axios from 'axios'
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

/**
 * Saves a user's Twitter data when they are logged in to our firebase firestore document
 * TODO put postUrl in an environment file
 */
const SaveTwitterUserData = (token, secret) => {
	firebase.firestore().settings({timestampsInSnapshots: true});
	const UserRef = firebase.firestore().collection("users")
	const currentUser = firebase.auth().currentUser
	const postUrl = 'http://localhost:4567/webhook/twitter'

	axios.post(`${postUrl}/${token}/${secret}`)
	.then(res => {
		UserRef.doc( currentUser.uid ).set({
			screen_name: res.data.screen_name,
			twitter_url: res.data.twitter_url,
			email: currentUser.providerData[0].email
		})
	})
}

module.exports = SaveTwitterUserData

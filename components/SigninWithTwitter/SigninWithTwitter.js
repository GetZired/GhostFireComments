import firebase from 'firebase/app';
import 'firebase/auth'
import SaveTwitterUserData from '../SaveTwitterUserData'

const SigninWithTwitter = () => {
	// Sign in Firebase using popup auth and Twitter as the identity provider.
	const provider = new firebase.auth.TwitterAuthProvider();
	firebase.auth().signInWithPopup(provider).then(result => {
		// This gives you a the Twitter OAuth 1.0 Access Token and Secret.
		// You can use these server side with your app's credentials to access the Twitter API
		const token = result.credential.accessToken;
		const secret = result.credential.secret;
		// Make a POST request to an external service
		// where it uses your Twitter api to fetch a user's data
		// This is optional
		SaveTwitterUserData(token, secret)
	});
}

module.exports = SigninWithTwitter

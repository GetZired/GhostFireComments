import firebase from 'firebase/app';
import 'firebase/auth'
import AuthStateObserver from '../AuthStateObserver'

/**
 * Initializing the Firebase App
 * @see https://firebase.google.com/docs/web/setup
 */
const FirebaseIni = () => {
	firebase.initializeApp({
		apiKey: "AIzaSyBBQ4uEFxsYLJH-_5tEpwaC1DzGKrmaIKk",
		authDomain: "get-zired.firebaseapp.com",
		databaseURL: "https://get-zired.firebaseio.com",
		projectId: "get-zired",
		storageBucket: "get-zired.appspot.com",
		messagingSenderId: "108439781601"
	});

	firebase.auth().onAuthStateChanged(AuthStateObserver);

}

module.exports = FirebaseIni

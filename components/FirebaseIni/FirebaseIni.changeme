import firebase from 'firebase/app';
import 'firebase/auth'
import AuthStateObserver from '../AuthStateObserver'

/**
 * Initializing the Firebase App
 * @see https://firebase.google.com/docs/web/setup
 */
const FirebaseIni = () => {
	firebase.initializeApp({
		apiKey: "<API_KEY>",
		authDomain: "<PROJECT_ID>.firebaseapp.com",
		databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
		projectId: "<PROJECT_ID>",
		storageBucket: "<BUCKET>.appspot.com",
		messagingSenderId: "<SENDER_ID>"
	});

	firebase.auth().onAuthStateChanged(AuthStateObserver);

}

module.exports = FirebaseIni

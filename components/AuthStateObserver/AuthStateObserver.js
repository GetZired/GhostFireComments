import firebase from 'firebase/app';
import CurrentUserProfilePicture from '../CurrentUserProfilePicture'
import SignInWithTwitter from '../SignInWithTwitter'
import TrixEventListeners from '../TrixEventListeners'
import LoadQuoteAndComment from '../LoadQuoteAndComment'
import PostContentEventListeners from '../PostContentEventListeners'
import Signout from '../Signout'

/**
 * Toggle the DOM elements to hide/show whenever a user is signed in or out
 * DOM elements are still present in the DOM
 */
const AuthStateObserver = (user) => {

	const signOutButton = document.querySelector('#sign-out')

	if (user) { // User is signed in!
		// Get the signed-in user's profile pic and name.
		//LoggedinHTMLContent()
		console.log('user logged in')
		LoadQuoteAndComment()
		document.querySelector('.ghost-fire-comments__input-container--out').setAttribute('hidden', 'true')
		document.querySelector('.ghost-fire-comments__input-container').classList.add('ghost-fire-comments__input-container--show')

		// Set the user's profile pic and name.
		document.querySelector('#autheduser').src = CurrentUserProfilePicture();
		//userNameElement.textContent = firebase.auth().currentUser.displayName;


		signOutButton.removeAttribute('hidden')
		signOutButton.addEventListener('click', Signout)

		TrixEventListeners()

		PostContentEventListeners(user)

		// We save the Firebase Messaging Device token and enable notifications.
		//saveMessagingDeviceToken();
	} else { // User is signed out!
		console.log('user logged out')
		PostContentEventListeners()
		document.querySelector('.ghost-fire-comments__input-container').classList.remove('ghost-fire-comments__input-container--show')
		document.querySelector('.ghost-fire-comments__input-container--out').removeAttribute('hidden')

		// Add event handler to the Twitter icon
		document.querySelector('#sign-in').addEventListener('click', SignInWithTwitter)

		signOutButton.setAttribute('hidden', 'true')
	}
}

module.exports = AuthStateObserver

import IsUserSignedIn from '../IsUserSignedIn'

const LoggedinHTMLContent = () => {
	const main = document.querySelector('.main-comment-header')
	//const signOutContainer = document.querySelector('.ghost-fire-comments__input-container--out')
	const signInContainer = document.getElementById('ghost-fire-comments__input-in')

	if (IsUserSignedIn()) {
		//signOutContainer.parentNode.removeChild(signOutContainer)
		return main.appendChild(signInContainer)
	}
return
	main.appendChild(signOutContainer)
	signInContainer.parentNode.removeChild(signInContainer)

}

module.exports = LoggedinHTMLContent

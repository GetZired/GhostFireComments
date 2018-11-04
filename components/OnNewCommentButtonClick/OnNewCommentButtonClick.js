import SaveMainComment from '../SaveMainComment'
import ScrollToViewElement from '../ScrollToViewElement'
import IsUserSignedIn from '../IsUserSignedIn'


const OnNewCommentButtonClick = (event) => {
	event.preventDefault()

	const messageInputElement = document.getElementById('message')
	const TRIX_ELEMENT = document.querySelector("trix-editor")
	
	// Check that the user entered a message and is signed in.
	if (messageInputElement.value && IsUserSignedIn()) {
		SaveMainComment(messageInputElement.value).then(commentId => {
			ScrollToViewElement(commentId)
			// Clear message text field and re-enable the SEND button.
			TRIX_ELEMENT.value = ''
		});
	}
}

module.exports = OnNewCommentButtonClick

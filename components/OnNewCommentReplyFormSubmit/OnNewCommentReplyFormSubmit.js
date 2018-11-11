import SaveReplyComment from '../SaveReplyComment'
import ScrollToViewElement from '../ScrollToViewElement'
import IsUserSignedIn from '../IsUserSignedIn'

/**
 * Creating a new comment reply
 */
const OnNewCommentReplyFormSubmit = (event) => {
	event.preventDefault();

	const replyInputElement = event.target.querySelector('input')
	const form = document.querySelector('.Comment__replyform')
	const masterCommentId = replyInputElement.getAttribute('data-masterreply-id')
	const replyUserId = replyInputElement.getAttribute("data-uid")

	// Remove from DOM when finish
	form.parentNode.removeChild(form)

	if (replyInputElement.value && IsUserSignedIn()) {
		SaveReplyComment(replyInputElement.value, masterCommentId, replyUserId).then((commentId) => {
			ScrollToViewElement(commentId)
			// Clear input field
			replyInputElement.value = ''
		});

	}
}

module.exports = OnNewCommentReplyFormSubmit

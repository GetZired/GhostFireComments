import SaveReplyComment from '../SaveReplyComment'
import ScrollToViewElement from '../ScrollToViewElement'
import IsUserSignedIn from '../IsUserSignedIn'

const OnNewCommentReplyFormSubmit = (event) => {
	event.preventDefault();

	let replyInputElement = event.target.querySelector('input')
	let form = document.querySelector('.Comment__replyform')
	let masterCommentId = replyInputElement.getAttribute('data-masterreply-id')
	let replyUserId = replyInputElement.getAttribute("data-uid")
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

import ProfilePictureUrl from '../ProfilePictureUrl'
import OnNewCommentReplyFormSubmit from '../OnNewCommentReplyFormSubmit'

// This needs serious refactoring!
const CommentReplyForm = (id, masterCommentId, replyUserId) => {
	const elId = id.split('reply_')[1]
	const referenceNode = document.getElementById(elId)
	const formElement = document.createElement('form')
	const input = document.createElement('input')
	// Create avatar div & image
	const avatarDiv = document.createElement('div')
	const avatarImage = document.createElement('img')

	input.setAttribute('type', "text")
	input.setAttribute('placeholder', "Leave a reply")
	input.setAttribute('id', `replyinput_${elId}`)
	input.setAttribute('data-masterreply-id', masterCommentId)
	input.setAttribute('data-uid', replyUserId ) // reply to userid
	formElement.setAttribute('action', "#")
	formElement.setAttribute('class', "Comment__replyform")
	avatarImage.src = ProfilePictureUrl();
	avatarDiv.appendChild(avatarImage)
	formElement.appendChild(avatarDiv)
	formElement.appendChild(input)

	const nextReferencedNode = referenceNode.getElementsByTagName('div')[0]
	nextReferencedNode.parentNode.insertBefore(formElement, nextReferencedNode.nextSibling);
	formElement.addEventListener('submit', OnNewCommentReplyFormSubmit)
}

module.exports = CommentReplyForm

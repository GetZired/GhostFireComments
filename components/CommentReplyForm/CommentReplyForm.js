import ProfilePictureUrl from '../ProfilePictureUrl'
import OnNewCommentReplyFormSubmit from '../OnNewCommentReplyFormSubmit'

const CommentReplyForm = (id, masterCommentId, replyUserId) => {
	let elId = id.split('reply_')[1]
	let referenceNode = document.getElementById(elId)
	let formElement = document.createElement('form')
	let input = document.createElement('input')
	input.setAttribute('type', "text")
	input.setAttribute('placeholder', "Leave a reply")
	input.setAttribute('id', `replyinput_${elId}`)
	input.setAttribute('data-masterreply-id', masterCommentId)
	input.setAttribute('data-uid', replyUserId ) // reply to userid
	formElement.setAttribute('action', "#")
	formElement.setAttribute('class', "ghost-fire-comments__replyform")

	// Create avatar div & image
	let avatarDiv = document.createElement('div')
	let avatarImage = document.createElement('img')
	avatarImage.src = ProfilePictureUrl();

	avatarDiv.appendChild(avatarImage)
	formElement.appendChild(avatarDiv)
	formElement.appendChild(input)

	//	referenceNode.parentNode.insertBefore(formElement, referenceNode.nextSibling);

	let nextReferencedNode = referenceNode.getElementsByTagName('div')[0]
	nextReferencedNode.parentNode.insertBefore(formElement, nextReferencedNode.nextSibling);

	formElement.addEventListener('submit', OnNewCommentReplyFormSubmit)
}

module.exports = CommentReplyForm

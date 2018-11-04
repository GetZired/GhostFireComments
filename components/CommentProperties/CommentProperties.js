// displayProperties
import IsUserSignedIn from '../IsUserSignedIn'
import CommentReplyForm from '../CommentReplyForm'

const CommentProperties = (div, obj, masterCommentId) => {
	div.querySelector('.ghost-fire-comments__username').textContent = obj.name;
	div.querySelector('.createdAt').textContent = obj.createdAt;
	div.querySelector('.replybtn').setAttribute('id', `reply_${obj.key}`);
	div.querySelector('.replybtn').setAttribute('data-uid', obj.userId);
	let messageElement = div.querySelector('.message');

	if (obj.replyToUserData) {
		messageElement.innerHTML = ( `<b><a href=${obj.replyToUserData.twitter_url}>${obj.replyToUserData.screen_name}</a></b>` + " " + obj.text);
	} else {
		messageElement.innerHTML = obj.text;
	}


	// Must be signed in before making a reply
	document.getElementById(`reply_${obj.key}`).addEventListener("click", (e) => {
		if ( IsUserSignedIn() ) {
			// TODO: Without this, forms are added back to DOM after reply submits
			const removeElements = (elms) => [...elms].forEach(el => el.remove());
			removeElements( document.querySelectorAll(".ghost-fire-comments__replyform") );
			let replyUserId = e.target.getAttribute('data-uid')
			CommentReplyForm(e.currentTarget.id, masterCommentId, replyUserId)

			// Adds a focus to the input after creation
			let input = document.getElementById(`replyinput_${obj.key}`);
			input.focus()
		}
	})
}

module.exports = CommentProperties

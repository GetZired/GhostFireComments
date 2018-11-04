import OnNewCommentButtonClick from '../OnNewCommentButtonClick'

const TrixEventListeners = () => {
	const COMMENT_BTN = document.querySelector('.message-form--btn')
	// Disables drag n drop files using preventDefault
	document.addEventListener("trix-file-accept", function(event) {
		event.preventDefault()
		console.log('🤬')
	});


	document.addEventListener("trix-change", function(event) {
		event.preventDefault()
		// Hack. Not 100% way to tell if the content has text or not. Returns null when user
		// removes all content/values from the editor
		let value = event.target.lastElementChild

		if (value) {
			// Show comment button
			return COMMENT_BTN.style.display = "inline-block"
		}
		// Hide comment button
		COMMENT_BTN.style.display = "none"
	});

	document.querySelector('.message-form--btn').addEventListener('click', OnNewCommentButtonClick)
}

module.exports = TrixEventListeners

import CommentBlock from '../CommentBlock'
import CommentProperties from '../CommentProperties'

/**
 * Displays all master comments -- no replies are included
 */
const RenderMainComment = (obj) => {
	// Found in MainLayout
	const messageListElement = document.getElementById('messages');
	const masterCommentId = obj.key; // This is the master ID
	let div = document.getElementById(obj.key);
	// If an element for that message does not exists yet we create it.
	if (!div) {
		const container = document.createElement('div');
		container.innerHTML = CommentBlock();

		div = container.firstChild;
		div.setAttribute('id', obj.key);
		messageListElement.appendChild(div);
	}

	CommentProperties(div, obj, masterCommentId)
}

module.exports = RenderMainComment

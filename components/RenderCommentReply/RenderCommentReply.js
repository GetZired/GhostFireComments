import CommentProperties from '../CommentProperties'
import CommentBlock from '../CommentBlock'

const RenderCommentReply = (obj) => {
	const masterCommentId = obj.target;
	const elementTargeForReplyAppend = document.getElementById(masterCommentId).lastElementChild;// .CommentBlock__replies`
	let div = document.getElementById(obj.key);

	if (!div) {
		let container = document.createElement('div');
		container.innerHTML = CommentBlock("CommentBlock--withcomment")
		div = container.firstChild;
		div.setAttribute('id', obj.key);
		elementTargeForReplyAppend.appendChild(div);
	}

	CommentProperties(div, obj, masterCommentId)
}

module.exports = RenderCommentReply

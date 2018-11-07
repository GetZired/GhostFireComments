import CommentProperties from '../CommentProperties'
import CommentBlock from '../CommentBlock'

const RenderCommentReply = (obj) => {
	let masterCommentId = obj.target;
	let elementTargeForReplyAppend = document.getElementById(masterCommentId).lastElementChild;// .CommentBlock__replies`
//return console.log(elementTargeForReplyAppend)
	let div = document.getElementById(obj.key);


	if (!div) {

		let container = document.createElement('div');

		container.innerHTML = CommentBlock("CommentBlock--withcomment")
		div = container.firstChild;
		div.setAttribute('id', obj.key);


		elementTargeForReplyAppend.appendChild(div);
	}

	if (obj.picUrl) {
		div.querySelector('.Comment__avatar--pic').src = obj.picUrl;
	}

	CommentProperties(div, obj, masterCommentId)
}

module.exports = RenderCommentReply

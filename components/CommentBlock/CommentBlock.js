import Comment from '../Comment'

const CommentBlock = (withComment) => (
	`<div class="CommentBlock ${withComment}">
		${Comment()}
		<div class="CommentBlock__replies"></div>
	</div>`
)

module.exports = CommentBlock

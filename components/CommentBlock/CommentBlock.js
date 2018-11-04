import Comment from '../Comment'

const CommentBlock = (withComment) => (
	`<div class="ghost-fire-comments__block ${withComment}">
		${Comment()}
		<div class="ghost-fire-comments__block__replies"></div>
	</div>`
)

module.exports = CommentBlock

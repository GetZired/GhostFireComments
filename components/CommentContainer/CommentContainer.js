import PostID from '../PostID'
import TrixEditor from '../TrixEditor'

const CommentContainer = () => (

	`<div id="CommentContainer-in" class="CommentContainer">
		<div class="CommentContainer__profile">
			<span class="CommentContainer__profile-image">
				<img id="autheduser" src="" alt=""  />
			</span>
		</div>
		<span class="CommentContainer__span">
			${TrixEditor()}
		</span>
	</div>`
)

module.exports = CommentContainer

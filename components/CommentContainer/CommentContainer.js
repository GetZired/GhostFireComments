import PostID from '../PostID'
import TrixEditor from '../TrixEditor'

const CommentContainer = () => (

	`<div id="ghost-fire-comments__input-in" class="ghost-fire-comments__input-container">
		<div class="ghost-fire-comments__input-profile">
				<span class="ghost-fire-comments__input-profile-image">
					<img id="autheduser" src="" alt=""  />
				</span>
		</div>
		<span class="ghost-fire-comments__input-span">
			${TrixEditor()}
		</span>
	</div>`
)

module.exports = CommentContainer

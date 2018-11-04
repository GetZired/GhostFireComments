import CommentContainer from '../CommentContainer'
import SignInBlock from '../SignInBlock'
import IsUserSignedIn from '../IsUserSignedIn'
// and comment-logged-in

const MainLayout = () => (

	`<div class="ghost-fire-comments__container">
		<div class="ghost-fire-comments-header">
			<div class="ghost-fire-comments-header__inner">
				<div class="ghost-fire-comments-heading">
					<div class="ghost-fire-comments-heading-totals">
						<span class="ghost-fire-comments-header--count"></span> <h3>Comments</h3>
					</div>
					<span class="ghost-fire-comments-heading--dash"></span>
				</div>

				<div class="main-comment-header">
					<!-- JS Controlled -->
					${SignInBlock()}
					${CommentContainer()}
				</div>
				<!-- Renders all comments -->
				<div id="messages" class="ghost-fire-comments__messages"></div>

				<div id="user-container">
					<div hidden id="user-pic"></div>
					<div hidden id="user-name"></div>
					<button hidden id="sign-out" class="">
						Sign-out
					</button>

				</div>
			</div>
		</div>
	</div>`

)

module.exports = MainLayout

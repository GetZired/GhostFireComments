import CommentContainer from '../CommentContainer'
import SignInBlock from '../SignInBlock'

const MainLayout = () => (
	`<div class="MainLayout">
		<div class="MainLayout__header">
			<div class="MainLayout__header__inner">
				<div class="MainLayout__header__inner__heading">
					<div class="MainLayout__header__inner__heading-totals">
						<span class="MainLayout__header--count"></span> <h3>Comments</h3>
					</div>
					<span class="MainLayout__header__inner__heading--dash"></span>
				</div>

				<div class="main-comment-header">
					<!-- JS Controlled -->
					${SignInBlock()}
					${CommentContainer()}
				</div>
				<!-- Renders all comments -->
				<div id="messages" class="Comment__messages"></div>

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

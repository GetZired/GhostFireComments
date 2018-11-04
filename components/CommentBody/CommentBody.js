import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

import CurrentUserProfilePicture from '../CurrentUserProfilePicture'
import PostID from '../PostID'

const CommentBody = (messageText, replyUserId=null) => {
	const USER_REF = firebase.firestore().collection("users")
	const POST_REF = firebase.firestore().collection("posts")

	return {
		name: firebase.auth().currentUser.displayName,
		text: messageText,
		postId: PostID(),
		profilePicUrl: CurrentUserProfilePicture(),
		createdAt: new Date,
		posts: POST_REF.doc(PostID()),
		user: USER_REF.doc( firebase.auth().currentUser.uid ),
		replyToUser: replyUserId ? USER_REF.doc( replyUserId ) : replyUserId
	}
}

module.exports = CommentBody

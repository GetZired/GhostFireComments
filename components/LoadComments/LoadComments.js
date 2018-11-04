import firebase from 'firebase/app'
import 'firebase/firestore'
import PostID from '../PostID'
import RenderMainComment from '../RenderMainComment'
import DisplayTotalComments from '../DisplayTotalComments'
import CommentReferenceSnapshot from '../CommentReferenceSnapshot'
import CommentReplyReferenceSnapshot from '../CommentReplyReferenceSnapshot'



const LoadComments = () => {
	firebase.firestore().settings({timestampsInSnapshots: true})
	const POST_REF = firebase.firestore().collection("posts")
	// Create a query against the collection.
	// https://stackoverflow.com/questions/46573014/firestore-query-subcollections
	POST_REF.doc(PostID()).onSnapshot(post => {

		let postData = post.data();
		if (postData) {

			DisplayTotalComments(postData.comments.length)

			return postData.comments.forEach((commentObject, id) => {
				commentObject.get()
				.then(c => {
					let comment = c.data();
					let commentReplies = comment.replies;
					CommentReferenceSnapshot(c.id)

					if (commentReplies) {
						commentReplies.forEach(replyObject => {
							replyObject.get()
							.then(reply => {
								CommentReplyReferenceSnapshot(reply.id, c.id)
							})
						});
					}
				})
			})
		}
		// No post, no comments
		DisplayTotalComments(0)
	})
}

module.exports = LoadComments

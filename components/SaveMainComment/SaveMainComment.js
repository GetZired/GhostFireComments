import firebase from 'firebase/app';
import 'firebase/firestore'
import CommentBody from '../CommentBody'
import PostID from '../PostID'


const SaveMainComment = (messageText) => {
	firebase.firestore().settings({timestampsInSnapshots: true});
	const COMMENT_REF = firebase.firestore().collection("comments")
	const POST_REF = firebase.firestore().collection("posts")

	return COMMENT_REF.add( CommentBody(messageText) ).then(comment => {
		// If no post collection for the comment, create then update using set and merge
		POST_REF.doc(PostID()).set({
			comments: firebase.firestore.FieldValue.arrayUnion(COMMENT_REF.doc(comment.id))
		}, { merge: true })

		// Return the id to scroll to view
		return comment.id
	});
}

module.exports = SaveMainComment

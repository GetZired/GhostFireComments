import firebase from 'firebase/app';
import 'firebase/firestore'
import CommentBody from '../CommentBody'
import PostID from '../PostID'

const SaveReplyComment = (messageText, masterCommentId, replyUserId) => {
	firebase.firestore().settings({timestampsInSnapshots: true});
	const COMMENT_REF = firebase.firestore().collection("comments")
	const POST_REF = firebase.firestore().collection("posts")
	const COMMENT_REPLIES_REF = firebase.firestore().collection("commentReplies")

	return COMMENT_REPLIES_REF.add( CommentBody(messageText, replyUserId) ).then(comment => {
		// If no post collection for the comment, create then update using set and merge
		COMMENT_REF.doc(masterCommentId).set({
			replies: firebase.firestore.FieldValue.arrayUnion(COMMENT_REPLIES_REF.doc(comment.id))
		}, { merge: true })

		POST_REF.doc(PostID()).set({
			commentReplies: firebase.firestore.FieldValue.arrayUnion(COMMENT_REPLIES_REF.doc(comment.id))
		}, { merge: true })

		// Return id for element to scroll to
		return comment.id

	});
}

module.exports = SaveReplyComment

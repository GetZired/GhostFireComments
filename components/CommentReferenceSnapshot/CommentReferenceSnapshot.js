import firebase from 'firebase/app';
import 'firebase/firestore'
import RenderMainComment from '../RenderMainComment'
import TimeAgo from '../TimeAgo'

const CommentReferenceSnapshot = (commentId) => {
	firebase.firestore().settings({timestampsInSnapshots: true});
	const COMMENT_REF = firebase.firestore().collection("comments")

	COMMENT_REF.doc(commentId).onSnapshot(comment => {
		const commentData = comment.data()
		const commentOjbect = {
			key: commentId,
			name: commentData.name,
			text: commentData.text,
			picUrl: commentData.profilePicUrl,
			createdAt: TimeAgo(commentData.createdAt.seconds.toString()),
			hasReplies: commentData.replies ? true : false,
			userId: commentData.user.id
		}

		RenderMainComment(commentOjbect);
	})
}

module.exports = CommentReferenceSnapshot

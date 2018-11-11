import firebase from 'firebase/app';
import 'firebase/firestore'
import TimeAgo from '../TimeAgo'
import RenderCommentReply from '../RenderCommentReply'

const CommentReplyReferenceSnapshot = (commentReplyId, masterCommentId) => {
	firebase.firestore().settings({timestampsInSnapshots: true});
	const COMMENT_REPLIES_REF = firebase.firestore().collection("commentReplies")

	COMMENT_REPLIES_REF.doc(commentReplyId).onSnapshot(commentReply => {
		const replyData = commentReply.data();
		replyData.replyToUser.get().then(user => {

			const replyOjbect = {
				target: masterCommentId, // for the reply item
				key: commentReplyId,
				name: replyData.name,
				text: replyData.text,
				picUrl: replyData.profilePicUrl,
				createdAt: TimeAgo(replyData.createdAt.seconds.toString()),
				hasReplies: false,
				userId: replyData.user.id,
				replyToUserData: user.data()
			}

			RenderCommentReply(replyOjbect)
		})
	})
}

module.exports = CommentReplyReferenceSnapshot

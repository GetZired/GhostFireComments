const PostID = () => {
	const element = document.getElementById('render-ghost-fire-comments')
	return element.getAttribute('data-post-id')
}

module.exports = PostID

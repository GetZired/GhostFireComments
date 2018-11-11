const ScrollToViewElement = (elementId) => {
	const checkExist = setInterval(() => {
		if ($(`#${elementId}`).length) {
			document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'center' })
			clearInterval(checkExist);
		}
	}, 100); // check every 100ms
}

module.exports = ScrollToViewElement

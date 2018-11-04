/**
 * TODO: Clean this mess up!!
 * and prevent from activating when user signs out
 * logic can be placed in AuthStateObserver
 */
const PostContentEventListeners = (user=false) => {
	const postContentElement = document.querySelector('.post-content')
	const toolTipElement = document.getElementById('quote-tooltip');
	const trixElement = document.querySelector("trix-editor")
	const handler = shouldShowToolTip.bind(null, toolTipElement, trixElement, postContentElement)
	if (user) {
	 postContentElement.addEventListener('mouseup', handler)

 	} else {
		// This does not work as the handler footprint is different when user signs out.
		// Need a way to keep a unique reference to the handler
		postContentElement.removeEventListener('mouseup', handler)
	}
}

const shouldShowToolTip = (toolTipElement, trixElement, postContentElement, event) => {
	let thisText = $(this).text();
	let selectedText = getSelectionText();
	if (selectedText){
		return showTooltip(selectedText, toolTipElement, trixElement, postContentElement)
	}

	toolTipElement.style.visibility = 'hidden'
}

const getSelectionText = () => {
	var text = "";
	if (window.getSelection) {
	    text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != "Control") {
	    text = document.selection.createRange().text;
	}

	return text;
}

const replaceSelectedText = () => {
	var sel = window.getSelection()
	var range = sel.getRangeAt(0);
	range.deleteContents();
	range.insertNode(document.createTextNode('replacementText'));
}

// Must see: https://stackoverflow.com/questions/442404/retrieve-the-position-x-y-of-an-html-element
// https://stackoverflow.com/questions/5176761/getting-selected-text-position
const showTooltip = (selectedText, toolTipElement, trixElement, postContentElement) => {

	let c = postContentElement.getBoundingClientRect()
	let sel = window.getSelection()

	const oRange = sel.getRangeAt(0); //get the text range
	const oRect = oRange.getBoundingClientRect();

	var top   = (oRect.top - c.top) - 55
	var left   = (oRect.left - c.left)
	var caretWidth = oRect.width / 2;

	if (oRect.width > 41) {
		let q = (oRect.width / 2) - 41
		left = left + q;
	}

	if (oRect.width < 41) {
		let q = 49 - oRect.width
		left = left - q;
	}

	let style = `left:${left}px;top:${top}px;`;
	toolTipElement.style = style;
	toolTipElement.style.visibility = 'visible'


	$('#quote-reply').unbind().click((e) => {
		e.preventDefault()
		//masterCommentInput.value = selectedText
		insertQuotedTextInTrix(selectedText, toolTipElement, trixElement)
		toolTipElement.style.visibility = 'hidden'

		// behavior: 'instant' or block: 'start' or block: 'end'
		// https://developer.mozilla.org/en/docs/Web/API/Element/scrollIntoView
		trixElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
	})
}

const insertQuotedTextInTrix = (selectedText, toolTipElement, trixElement) => {
	let length = trixElement.editor.getDocument().toString().length
	// Insert a bold “Hello” at the beginning of the document
	trixElement.editor.setSelectedRange([length - 1])
	trixElement.editor.insertHTML(`<blockquote>${selectedText}</blockquote>`)
	trixElement.editor.insertLineBreak()
	trixElement.editor.insertLineBreak()
	trixElement.editor.insertLineBreak()
}

module.exports = PostContentEventListeners

// TODO: Rename to tooltip
const LoadQuoteAndComment = () => {
	const postContent = document.querySelector('.post-content')
	const postContentInnerHTML = postContent.innerHTML
	postContent.style = 'position:relative'
	postContent.innerHTML = (postContentInnerHTML + tooltipHtml())
}

const tooltipHtml = () => (
	`<div id="quote-tooltip" style="pointer-events: auto !important;" class="absolute z-999 ember-view">
		<ul class="kg-action-bar bg-darkgrey-d1 inline-flex ma0 pl1 pr1 list br3 shadow-2 relative white f8 anim-fast-bezier">
			<li class="ma0 lh-solid">
				<button id="quote-reply" title="Bold" class="dib dim-lite link h10 w9 nudge-top--1" type="button" data-ember-action="" data-ember-action-738="738">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white w4 h4"><path d="M7.412 6.217h1.176c1.276 0 2.236-.773 2.236-1.608 0-.835-.96-1.609-2.236-1.609H5.765v3.217h1.647zM5.765 13H9.47c1.405 0 2.53-1.08 2.53-2.391s-1.124-2.392-2.53-2.392H5.766V13zm-2 0V3H3a1 1 0 0 1 0-2h5.588c2.297 0 4.236 1.563 4.236 3.609 0 .877-.357 1.666-.945 2.28C13.15 7.665 14 9.037 14 10.61 14 13.043 11.963 15 9.47 15H3a1 1 0 0 1 0-2h.765z" fill="#FFF"></path></svg>
				</button>
			</li>
			<li class="ma0 lh-solid">
				<button title="Bold" class="dib dim-lite link h10 w9 nudge-top--1" type="button" data-ember-action="" data-ember-action-738="738">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white w4 h4"><path d="M7.412 6.217h1.176c1.276 0 2.236-.773 2.236-1.608 0-.835-.96-1.609-2.236-1.609H5.765v3.217h1.647zM5.765 13H9.47c1.405 0 2.53-1.08 2.53-2.391s-1.124-2.392-2.53-2.392H5.766V13zm-2 0V3H3a1 1 0 0 1 0-2h5.588c2.297 0 4.236 1.563 4.236 3.609 0 .877-.357 1.666-.945 2.28C13.15 7.665 14 9.037 14 10.61 14 13.043 11.963 15 9.47 15H3a1 1 0 0 1 0-2h.765z" fill="#FFF"></path></svg>
				</button>
			</li>

		</ul>
	</div>`
)

module.exports = LoadQuoteAndComment

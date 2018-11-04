import * as trix from 'trix'
import PostID from '../PostID'

const TrixEditor = () => (
	`<form id="message-form" action="#">
		<div class="message-form__inner">
			<trix-toolbar id="my-toolbar">
				<div class="trix-button-row">
					<span class="trix-button-group trix-button-group--text-tools" data-trix-button-group="text-tools">
						<button type="button" class="trix-button trix-button--icon trix-button--icon-bold" data-trix-attribute="bold" data-trix-key="b" title="#{lang.bold}" tabindex="-1">
							<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white w4 h4"><path d="M7.412 6.217h1.176c1.276 0 2.236-.773 2.236-1.608 0-.835-.96-1.609-2.236-1.609H5.765v3.217h1.647zM5.765 13H9.47c1.405 0 2.53-1.08 2.53-2.391s-1.124-2.392-2.53-2.392H5.766V13zm-2 0V3H3a1 1 0 0 1 0-2h5.588c2.297 0 4.236 1.563 4.236 3.609 0 .877-.357 1.666-.945 2.28C13.15 7.665 14 9.037 14 10.61 14 13.043 11.963 15 9.47 15H3a1 1 0 0 1 0-2h.765z" fill="#000"></path></svg>
						</button>
						<button type="button" class="trix-button trix-button--icon trix-button--icon-italic" data-trix-attribute="italic" data-trix-key="i" title="Italic" tabindex="-1">
							<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" class="fill-white w4 h4"><path d="M12.15 3L6.104 13h.811a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h1.767L9.813 3H9a1 1 0 0 1 0-2h4.915a1 1 0 0 1 0 2H12.15z" fill="#000"></path></svg>
						</button>
						<button type="button" class="trix-button trix-button--icon trix-button--icon-code" data-trix-attribute="code" title="#{lang.code}" tabindex="-1">
							<svg style="width:24px;height:24px" viewBox="0 0 24 24">
									<path fill="#000000" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
							</svg>
						</button>
						<button type="button" class="trix-button trix-button--icon trix-button--icon-bullet-list" data-trix-attribute="bullet" title="#{lang.bullets}" tabindex="-1">
							<svg style="width:24px;height:24px" viewBox="0 0 24 24">
								<path fill="#000000" d="M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z" />
							</svg>
						</button>
						<button type="button" class="trix-button trix-button--icon trix-button--icon-number-list" data-trix-attribute="number" title="#{lang.numbers}" tabindex="-1">
							<svg style="width:24px;height:24px" viewBox="0 0 24 24">
								<path fill="#000000" d="M7,13H21V11H7M7,19H21V17H7M7,7H21V5H7M2,11H3.8L2,13.1V14H5V13H3.2L5,10.9V10H2M3,8H4V4H2V5H3M2,17H4V17.5H3V18.5H4V19H2V20H5V16H2V17Z" />
							</svg>
						</button>
					</span>
				</div>
			</trix-toolbar>
			<input type="hidden" name="comment" id="message" data-post-id="${PostID()}"/>
			<trix-editor toolbar="my-toolbar" placeholder="Share your thoughts..." input="message"></trix-editor>
		</div>
		<button class="message-form--btn">Comment</button>
	</form>`
)

module.exports = TrixEditor

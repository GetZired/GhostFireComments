const Comment = () => (
	`<div class="Comment">
		<div class="Comment__avatar Comment--left">
			<img class="Comment__avatar--pic" src="" alt=""  />
		</div>
		<div class="Comment--right">
			<div class="Comment__username"></div>
			<div class="message"></div>
			<div class="Comment__postbits">
				<span>
					<span>
						<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
							<path d="M4.334 9l.778-.778L2.89 6H6c1.834 0 3.334-1.5 3.334-3.333V1H8.223v1.667c0 1.222-1 2.222-2.222 2.222H2.89l2.222-2.222-.778-.778-3.167 3.167a.537.537 0 0 0 0 .777L4.334 9z" stroke="#999" fill="#999" fill-rule="evenodd"></path>
						</svg></span>
					<a class="replybtn">Reply</a>
				</span>
				<span>
					<span></span>
					<a class="createdAt"></a>
				</span>
			</div>
		</div>
	</div>`
)

module.exports = Comment

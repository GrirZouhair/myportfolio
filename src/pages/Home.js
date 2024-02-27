import Header from './../components/header/Header'



const Home = () => {
	return (
		<>
			<Header />
			<div class="ag-format-container">
				<div class="ag-courses_box">
					<div class="ag-courses_item">
						<a class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								frontend
							</div>

							<div class="ag-courses-item_date-box">

								<span class="ag-courses-item_date">
									HTML5, CSS3, Boostrap, javascript, React
								</span>
							</div>
						</a>
					</div>

					<div class="ag-courses_item">
						<a class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								backend
							</div>

							<div class="ag-courses-item_date-box">
								<span class="ag-courses-item_date">
									MySQL, MongoDB, PHP, Laravel
								</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
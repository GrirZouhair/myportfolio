import Header from './../components/header/Header'
import html from "../img/icons/html.png";
import css from "../img/icons/css.png";
import javascript from "../img/icons/javascript.png";
import bootstrap from "../img/icons/bootstrap.png";
import react from "../img/icons/reactJS.png";

import mysql from "../img/icons/mysql.png";
import mongoDb from "../img/icons/mongoDb.png";
import php from "../img/icons/php.png";
import laravel from "../img/icons/laravel.png";
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
								Frontend Skills :
							</div>

							<div class="ag-courses-item_date-box">

								<span class="ag-courses-item_date">
									<img src={html} style={{ width: '60px' }} />
									<img src={css} style={{ width: '60px' }} />
									<img src={bootstrap} style={{ width: '70px' }} />
									<img src={javascript} style={{ width: '60px' }} />
									<img src={react} style={{ width: '60px' }} />
								</span>
							</div>

						</a>
					</div>

					<div class="ag-courses_item">
						<a class="ag-courses-item_link">
							<div class="ag-courses-item_bg"></div>

							<div class="ag-courses-item_title">
								Backend Skills :
							</div>

							<div class="ag-courses-item_date-box">
								<span class="ag-courses-item_date">
									<img src={mysql} style={{ width: '70px' }} />
									<img src={mongoDb} style={{ width: '60px', marginLeft: "20px" }} />
									<img src={php} style={{ width: '70px' }} />
									<img src={laravel} style={{ width: '70px' }} />
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
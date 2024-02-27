import "./style.css";
import portfolio from "../../../src/portfolio/portfolio.pdf";
const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Grir_Zouhair</em>
					</strong>
					<br />Full Stack Developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href={portfolio} download={portfolio} className="btn">
					Download CV
				</a>
			</div>
		</header>
	);
}

export default Header;
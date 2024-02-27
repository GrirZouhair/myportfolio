import "./style.css";

import instagram from './../../img/icons/instagram.svg';
import twitter from './../../img/icons/twitter.svg';
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
	const CurrentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://www.instagram.com/zouhair_grir/" target="_blank">
								<img src={instagram} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://twitter.com/GrirZouhair" target="_blank">
								<img src={twitter} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://github.com/GrirZouhair" target="_blank">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item" target="_blank">
							<a href="https://www.linkedin.com/in/zouhair-grir-026a4b289/">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© {CurrentYear}</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
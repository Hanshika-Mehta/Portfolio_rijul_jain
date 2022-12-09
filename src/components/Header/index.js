import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => {
	return (
		<header>
			<div>
				<img src={logo} alt="Logo.png" />
			</div>
			<div>
				<ul>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/resume">Resume</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

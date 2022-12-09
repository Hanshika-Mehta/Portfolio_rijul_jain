import React from "react";
import "./footer.scss";

const Footer = () => {
	return (
		<footer style={{ textAlign: "center" }}>
			<div className="view-invert">
				Let's connect
				<div className="inverted-view">
					<ul>
						<li>One</li>
						<li>Two</li>
						<li>Three</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

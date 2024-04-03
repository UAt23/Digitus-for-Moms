import React from "react";
import "./Navbar.css";
import logo from "../assets/digitus.png";

const Navbar: React.FC = () => {
	return (
		<div className="navbarWrapper">
			<div className="navbar">
				<img className="logo" src={logo} alt="Company Logo" />
				<div className="links">
					<div className="addButton"></div>
					<a href="" className="link">
						Moms
					</a>
					<a href="" className="link">
						Experts
					</a>
					<a href="" className="link">
						Explore
					</a>
					<a href="" className="link">
						Forum
					</a>
					<a href="" className="link">
						MomTalks
					</a>
				</div>
			</div>
			<div className="navDivider"></div>
		</div>
	);
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../assets/digitus.png";
import { Badge, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar: React.FC = () => {
	return (
		<div className="navbarWrapper">
			<div className="navbar">
				<img className="logo" src={logo} alt="Company Logo" />
				<div className="links">
					<IconButton
						className="addButton"
						aria-label="delete"
						size="large"
					>
						<AddIcon fontSize="inherit" />
					</IconButton>
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
				<div className="rightSideWrapper">
					<IconButton
						className="rightButton"
						aria-label="delete"
						size="medium"
					>
						<SearchIcon fontSize="inherit" />
					</IconButton>
					<div className="verticalDivider">.</div>
					<IconButton
						className="rightButton"
						aria-label="delete"
						size="medium"
					>
						<Badge badgeContent={4} color="default">
							<EmailIcon fontSize="inherit" />
						</Badge>
					</IconButton>
					<IconButton
						className="rightButton"
						aria-label="delete"
						size="medium"
					>
						<Badge badgeContent={12} color="default">
							<NotificationsIcon fontSize="inherit" />
						</Badge>
					</IconButton>
					<div className="verticalDivider">.</div>
					<div className="imageUser">
						<img
							className="userImageNav"
							src="https://source.unsplash.com/random/100x100?man&orientation=portrait"
							alt=""
						/>
					</div>
					<IconButton
						aria-label="chevron-right"
						size="medium"
						className="rightButton"
					>
						<KeyboardArrowDownIcon fontSize="inherit" />
					</IconButton>
				</div>
			</div>
			<div className="navDivider"></div>
		</div>
	);
};

export default Navbar;

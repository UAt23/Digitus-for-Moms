import React from "react";
import "./Header.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Header: React.FC<{ userData: string[] }> = ({ userData }) => {
	const [userName, imageUrl, userType] = userData;
	return (
		<div className="header">
			<div className="leftSideWrapper">
				<div className={`imageCircle ${userType.length > 0 ? 'jobbed' : '' }`}>
					<img className="userImage" src={imageUrl} alt="" />
				</div>
				<div className="userInfo">
					<p className="userName">{userName}</p>
					<p className="userJob">{userType}</p>
				</div>
			</div>
			<MoreHorizIcon fontSize="large" className="more" />
		</div>
	);
};

export default Header;

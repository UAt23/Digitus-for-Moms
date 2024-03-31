import React from "react";
import "./Header.css";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Header: React.FC = () => {
	return (
		<div className="header">
			<div className="leftSideWrapper">
				<img
					className="userImage"
					src="https://thispersondoesnotexist.com/"
					alt=""
				/>
				<div className="userInfo">
					<p className="userName">Ahmet Yıldız Kenter</p>
					<p className="userJob">Medical Doctor</p>
				</div>
			</div>
			<MoreHorizIcon fontSize="large" className="more" />
		</div>
	);
};

export default Header;

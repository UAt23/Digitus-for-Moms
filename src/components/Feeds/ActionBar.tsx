import React from "react";
import "./ActionBar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { SvgIcon } from "@mui/material";

const ActionBar: React.FC = () => {
	return (
		<div className="actionBarWrapper">
			<div className="leftWrapper">
				<SvgIcon className="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="33"
						viewBox="0 0 35 33"
						fill="none"
					>
						<path
							d="M17.8488 31.5L15.4782 29.342C7.05858 21.7071 1.5 16.6553 1.5 10.4918C1.5 5.44005 5.4564 1.5 10.4918 1.5C13.3365 1.5 16.0668 2.82425 17.8488 4.90054C19.6308 2.82425 22.361 1.5 25.2057 1.5C30.2411 1.5 34.1975 5.44005 34.1975 10.4918C34.1975 16.6553 28.639 21.7071 20.2193 29.342L17.8488 31.5Z"
							stroke="#2D3436"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
					</svg>
				</SvgIcon>
				<SvgIcon className="icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="49"
						height="33"
						viewBox="0 0 49 33"
						fill="none"
					>
						<path
							d="M30.3889 1.5L48.1667 15.3889L30.3889 29.2778V22.0555C29.4427 22.0122 12.9561 21.4805 1.5 31.5C6.0855 17.3744 20.4844 11.2289 30.3889 8.7222V1.5Z"
							stroke="#2D3436"
							strokeWidth="1.5"
							strokeLinejoin="round"
						/>
					</svg>
				</SvgIcon>
			</div>
			<SvgIcon className="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="26"
					height="33"
					viewBox="0 0 26 33"
					fill="none"
				>
					<path
						d="M21.5 1.5H4.83333C2.99239 1.5 1.5 2.99238 1.5 4.83333V31.5L13.1667 26.5L24.8333 31.5V4.83333C24.8333 2.98333 23.3333 1.5 21.5 1.5Z"
						stroke="#2D3436"
						strokeWidth="1.5"
						strokeLinejoin="round"
					/>
				</svg>
			</SvgIcon>
		</div>
	);
};

export default ActionBar;

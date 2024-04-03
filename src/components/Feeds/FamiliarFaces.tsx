import React, { useState } from "react";
import "./FamiliarFaces.css";
import FaceCard from "./FaceCard";
import { IconButton } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const data = [
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86e",
		user_name: "Emily Johnson",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "Medical Doctor",
		user_location: "Tokyo",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86f",
		user_name: "Ethan Martinez",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "",
		user_location: "New York",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86g",
		user_name: "Sophia Thompson",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "",
		user_location: "Rio de Janeiro",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86h",
		user_name: "Liam Nguyen",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "Medical Doctor",
		user_location: "Paris",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86j",
		user_name: "Olivia Patel",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "",
		user_location: "Cairo",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86k",
		user_name: "Noah Williams",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "",
		user_location: "Cape Town",
	},
	{
		user_id: "e172f80c-c3b8-4724-a3eb-dfb0a3c5e86l",
		user_name: "Ava Garcia",
		user_image_url:
			"https://source.unsplash.com/random/100x100?woman&orientation=portrait",
		user_type: "",
		user_location: "Sydney",
	},
];

const FamiliarFaces: React.FC = () => {
	const [index, setIndex] = useState(1);

	const slideLeft = () => {
		setIndex(index - 1);
	};

	const slideRight = () => {
		setIndex(index + 1);
	};

	return (
		<div className="carouselWrapper">
			<div className="carouselHeaderWrapper">
				<p className="carouselHeader">Members You May Know</p>
				<span className="allButton">SEE ALL</span>
			</div>
			<IconButton
				onClick={() => slideLeft()}
				aria-label="chevron-left"
				disabled={index <= 1}
				size="large"
				className="indexButton left"
			>
				<ChevronLeftIcon fontSize="inherit" />
			</IconButton>
			<IconButton
				onClick={() => slideRight()}
				aria-label="chevron-right"
				disabled={index >= 5}
				size="large"
				className="indexButton right"
			>
				<ChevronRightIcon fontSize="inherit" />
			</IconButton>
			<div className="carousel">
				{data.map((person, n) => {
					let position =
						n === index + 1
							? "nextFace"
							: n === index
							? "activeFace"
							: n === index - 1
							? "prevFace"
							: "invisible";
					return <FaceCard key={n} cardData={[person, position, n]} />;
				})}
			</div>
		</div>
	);
};

export default FamiliarFaces;

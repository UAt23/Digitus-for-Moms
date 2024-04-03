import React from "react";
import "./FaceCard.css";

const FaceCard: React.FC<{ cardData: any[] }> = ({ cardData }) => {
	const [person, position, index] = cardData;
	console.log(position);

	return (
		<div className={`familiarFace ${position}`}>
			<div className="imageContainer">
				<img
					className="cardImage"
					src={person.user_image_url + "&" + index}
					alt=""
				/>
			</div>
			<div className="cardInfo">
				<p className="name">{person.user_name}</p>
				<p className="job">{person.user_type}</p>
			</div>
			<p className="location">{person.user_location}</p>
			<div className="followButton">
            <span className="follow">Follow</span>
         </div>
		</div>
	);
};

export default FaceCard;

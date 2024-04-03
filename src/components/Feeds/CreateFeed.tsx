import React from "react";
import "./CreateFeed.css";

const CreateFeed: React.FC = () => {
	return (
		<div className="createWrapper">
			<div className="inputWrapper">
				<img
					className="userBigImage"
					src="https://source.unsplash.com/random/100x100?woman&orientation=portrait?0"
					alt=""
				/>
				<textarea
					className="inputArea"
					placeholder={"Write something, USER"}
					name=""
					id=""
					cols={30}
					rows={10}
				></textarea>
			</div>
		</div>
	);
};

export default CreateFeed;

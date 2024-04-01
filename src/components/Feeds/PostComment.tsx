import React from "react";
import "./PostComment.css";

const PostComment: React.FC = () => {
	return (
		<>
            <div className="divider"></div>
			<div className="postComment">
				<input
					className="commentInput"
					type="text"
					placeholder="Comment This"
				/>
				<button className="postButton">Post</button>
			</div>
		</>
	);
};

export default PostComment;

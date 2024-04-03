import React from "react";
import './Content.css';

const Content: React.FC<{postContent: string}> = ({postContent}) => {
	return (
		<div className="content">
			{postContent}
		</div>
	);
};

export default Content;

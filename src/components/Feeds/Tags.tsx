import React from "react";
import "./Tags.css";
// TODO Tags must be input
const Tags: React.FC<{ postTags: string }> = ({postTags}) => {
	return <div className="tags">#{postTags}</div>;
};

export default Tags;

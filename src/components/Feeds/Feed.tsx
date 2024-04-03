import React from "react";
import "./Feed.css";
import Header from "./Header";
import ImageContent from "./ImageContent";
import ActionBar from "./ActionBar";
import Detail from "./Detail";
import Content from "./Content";
import Tags from "./Tags";
import PostComment from "./PostComment";
import { FeedModel } from "../../api/models/FeedModel";

const Feed: React.FC<{ feedData: any[] }> = ({ feedData }) => {
	const [index, feed] = feedData;
	const {
		user_id,
		user_name,
		user_image_url,
		user_type,
		post_id,
		post_likes,
		post_shared,
		post_read_duration,
		post_views,
		post_number_of_comments,
		post_content,
		post_tags,
		post_comments,
		post_liked,
		post_type,
		post_image_url,
	}: FeedModel = feed;
	return (
		<div className="feed">
			<Header
				userData={[user_name, user_image_url + "?" + index, user_type]}
			/>
			<ImageContent postImage={post_image_url + "&" + index} />
			<ActionBar actionData={[post_id, post_likes, post_shared]} />
			<Detail
				postDetail={[
					post_read_duration,
					post_views,
					post_number_of_comments,
				]}
			/>
			<Content postContent={post_content} />
			<Tags postTags={post_tags} />
			<PostComment />
		</div>
	);
};

export default Feed;

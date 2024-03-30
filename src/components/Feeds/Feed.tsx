import React from "react";
import Header from "./Header";
import ImageContent from "./ImageContent";
import ActionBar from "./ActionBar";
import Detail from "./Detail";
import Content from "./Content";
import Tags from "./Tags";
import PostComment from "./PostComment";

const Feed: React.FC = () => {
    return (
        <div className="feed">
            <Header />
            <ImageContent />
            <ActionBar />
            <Detail />
            <Content />
            <Tags />
            <PostComment />
        </div>
    );
};

export default Feed;

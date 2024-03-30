import React from "react";
import Feed from "./Feed";

const Feeds: React.FC = () => {
    return (
        <div className="feeds">
            {/* You can map through your feed data and render Feed component for each feed */}
            <Feed />
            {/* Additional Feed components go here */}
        </div>
    );
};

export default Feeds;

import React from "react";
import "./Feeds.css";
import { lazy, Suspense } from "react";
import { useAppContext } from "../../context/AppContextProvider";
import InfiniteScroll from "react-infinite-scroller";
import CreateFeed from "./CreateFeed";
import FamiliarFaces from "./FamiliarFaces";

const Feed = lazy(() => import("./Feed"));

const Feeds: React.FC = () => {
	const { feeds, getNextPage } = useAppContext();

	function loadMoreFeeds() {
		getNextPage();
	}

	return (
		<Suspense fallback={<div>isLoading...</div>}>
			<div className="feedsContainer">
				<InfiniteScroll
					pageStart={0}
					loadMore={loadMoreFeeds}
					hasMore={feeds.length < 1000}
					loader={
						<div className="loader" key={0}>
							Loading ...
						</div>
					}
					useWindow={false}
				>
					<div className="scrollWrapper">
						<CreateFeed />
						<FamiliarFaces />
						{feeds.length ? (
							feeds.map((feed, index) => (
								<Feed key={index} feedData={[index, feed]} />
							))
						) : (
							<div>isLoading...</div>
						)}
					</div>
				</InfiniteScroll>
			</div>
		</Suspense>
	);
};

export default Feeds;

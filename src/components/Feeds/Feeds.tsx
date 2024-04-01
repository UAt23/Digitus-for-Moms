import React from "react";
import "./Feeds.css";
import { lazy, Suspense } from "react";
import { useAppContext } from "../../context/AppContextProvider";
import InfiniteScroll from "react-infinite-scroller";
import Home from "../../pages/Home";

const Feed = lazy(() => import("./Feed"));

const Feeds: React.FC = () => {
	const { feeds, getNextPage } = useAppContext();
	console.log(123);

	function loadMoreFeeds() {
		getNextPage();
	}

	return (
		<Suspense fallback={<div>isLoading...</div>}>
			<div className="feedsWrapper">
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
					{feeds.length ? (
						feeds.map((feed, index) => <Feed key={index} />)
					) : (
						<div>isLoading...</div>
					)}
				</InfiniteScroll>
			</div>
		</Suspense>
	);
};

export default Feeds;

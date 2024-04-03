import React, { createContext, useContext, useEffect, useState } from "react";
import { FeedModel } from "../api/models/FeedModel";
import ApiLayer from "../api/ApiLayer";

interface AppContextType {
	feeds: FeedModel[],
	getNextPage: any
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error(
			"useAppContext must be used within an AppContextProvider"
		);
	}
	return context;
};

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(12);
	const [feeds, setFeeds] = useState<FeedModel[]>([]);

	const fetchFeeds = async (page: number) => {
		try {
			const response = await ApiLayer.getFeed(page, pageSize);
			setFeeds([...feeds, ...response.data]);
			setCurrentPage(page);
		} catch (error) {
			console.error("Error fetching feeds:", error);
		}
	};

	useEffect(() => {
		fetchFeeds(0);
	}, []);

	function getNextPage() {
		fetchFeeds(currentPage + 1);
	}

	const contextValue: AppContextType = {
		feeds,
		getNextPage
	};
	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

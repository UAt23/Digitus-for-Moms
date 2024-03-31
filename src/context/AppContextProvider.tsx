import React, { createContext, useContext, useEffect, useState } from "react";
import { FeedModel } from "../api/models/FeedModel";
import { AxiosResponse } from "axios";
import ApiLayer from "../api/ApiLayer";

interface AppContextType {
	feeds: FeedModel[];
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
	const [feeds, setFeeds] = useState<FeedModel[]>([]);

	useEffect(() => {
		const fetchFeeds = async () => {
			try {
				const response = await ApiLayer.getFeed();
				setFeeds(response.data);
			} catch (error) {
				console.error("Error fetching feeds:", error);
			}
		};

		fetchFeeds();
	}, []);

	// Memoize the value to avoid unnecessary re-renders
	const contextValue: AppContextType = {
		feeds,
	};
	return (
		<AppContext.Provider value={contextValue}>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;

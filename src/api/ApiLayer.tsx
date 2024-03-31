import axios, { AxiosResponse } from "axios";
import { FeedModel } from "./models/FeedModel";

const baseURL = "http://localhost:3001";

// Define the API layer class
class Api {
	// Method to get all data
	async getFeed(): Promise<AxiosResponse<FeedModel[]>> {
		return axios.get<FeedModel[]>(`${baseURL}/feed`);
	}

	// Method to add a new FeedModel
	async addFeedModel(
		FeedModel: FeedModel
	): Promise<AxiosResponse<FeedModel>> {
		return axios.post<FeedModel>(`${baseURL}/feed`, FeedModel);
	}

	// Method to update a FeedModel
	async updateFeedModel(
		FeedModelId: string,
		updatedFeedModel: Partial<FeedModel>
	): Promise<AxiosResponse<FeedModel>> {
		return axios.put<FeedModel>(
			`${baseURL}/feed/${FeedModelId}`,
			updatedFeedModel
		);
	}
}

// Export an instance of the API layer class
export default new Api();

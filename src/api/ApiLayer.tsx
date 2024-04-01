import axios, { AxiosResponse } from "axios";
import { FeedModel } from "./models/FeedModel";

const baseURL = "http://localhost:3001";

class Api {
	async getFeed(
		page: number,
		limit: number
	): Promise<AxiosResponse<FeedModel[]>> {
		return axios.get<FeedModel[]>(`${baseURL}/feed`, {
			params: {
				_page: page,
				_limit: limit,
			},
		});
	}

	async addFeedModel(
		FeedModel: FeedModel
	): Promise<AxiosResponse<FeedModel>> {
		return axios.post<FeedModel>(`${baseURL}/feed`, FeedModel);
	}

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

export default new Api();

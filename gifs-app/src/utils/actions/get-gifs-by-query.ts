import type { Gif, GiphyResponse } from '../interface';
import { api } from '../../api/giphy.api';

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
	const response = await api.get<GiphyResponse>('/search', {
		params: {
			q: query,
			limit: 10,
		},
	});

	return response.data.data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		url: gif.images.original.url,
		width: +gif.images.original.width,
		height: +gif.images.original.height,
	}));
};

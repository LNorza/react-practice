import { useRef, useState } from 'react';
import type { Gif } from '../utils';
import { getGifsByQuery } from '../utils/actions';

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
	const [previousSearches, setPreviousSearches] = useState<string[]>([]);
	const [gifs, setGifs] = useState<Gif[]>([]);
	const gifsCache = useRef<Record<string, Gif[]>>({});

	const handleTermClicked = async (term: string) => {
		if (gifsCache.current[term]) {
			setGifs(gifsCache.current[term]);
			return;
		}
		const gifs = await getGifsByQuery(term);
		setGifs(gifs);
	};

	const handleSearch = async (query: string) => {
		const newQuery = query.trim().toLocaleLowerCase();
		if (query.length == 0) return;
		if (previousSearches.includes(newQuery)) return;
		setPreviousSearches([query, ...previousSearches].slice(0, 7));

		const gifs = await getGifsByQuery(query);
		setGifs(gifs);

		gifsCache.current[newQuery] = gifs;
	};

	return {
		gifs,
		previousSearches,

		handleTermClicked,
		handleSearch,
	};
};

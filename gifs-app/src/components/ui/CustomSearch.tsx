import { useEffect, useState } from 'react';

interface Props {
	placeHolder?: string;
	onQuery: (query: string) => void;
}

export const CustomSearch = ({ placeHolder = 'Buscar', onQuery }: Props) => {
	const [textSearch, setTextSearch] = useState('');

	const handleSearch = () => {
		onQuery(textSearch);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key == 'Enter') {
			handleSearch();
		}
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			onQuery(textSearch);
		}, 700);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [textSearch, onQuery]);

	return (
		<section className='search-container'>
			<input
				type='text'
				placeholder={placeHolder}
				value={textSearch}
				onChange={(e) => setTextSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key == 'Enter') handleKeyDown(e);
				}}
			/>
			<button onClick={() => handleSearch()}>Buscar</button>
		</section>
	);
};

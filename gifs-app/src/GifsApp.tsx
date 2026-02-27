import { GifList } from './components/gifs/GifList';
import { PreviousSearches } from './components/gifs/PreviousSearches';
import { CustomHeader, CustomSearch } from './components/ui';
import { useGifs } from './hooks/useGifs';

export const GifsApp = () => {
	const { gifs, previousSearches, handleSearch, handleTermClicked } = useGifs();

	return (
		<>
			{/* Header section */}
			<CustomHeader
				title='Buscador de Gifs'
				description='Descubre y comparte el gif perfecto'
			/>

			{/* Search section */}
			<CustomSearch
				placeHolder='Buscar Gifs'
				onQuery={handleSearch}
			/>

			{/* Previous searches */}
			<PreviousSearches
				onTermClicked={handleTermClicked}
				searches={previousSearches}
			/>

			{/* Gifs display section */}
			<GifList gifs={gifs} />
		</>
	);
};

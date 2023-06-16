import { FC, useState } from "react";


import SearchBar from "@/components/SearchBar";
import SearchResultsModal from "@/components/SearchResultsModal";
import { IItem } from "@/lib/types";


interface SearchFeatureProps {
	inventory: IItem[];
}

const SearchFeature: FC<SearchFeatureProps> = ({ inventory }) => {
	const [results, setResults] = useState<IItem[]>([]);

	const handleSearch = (searchTerm: string) => {
		const matchedResults = inventory.filter((item) =>
			item.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setResults(matchedResults);
	};

    const handleCloseModal = () => {
        setResults([])
    } 

	return (
		<div>
			<SearchBar onSearch={handleSearch} />
			<SearchResultsModal results={results} onClose={handleCloseModal} />
		</div>
	);
};

export default SearchFeature;
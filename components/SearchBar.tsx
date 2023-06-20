import { ChangeEvent, FC, useState } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
	onSearch: (searchTerm: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		onSearch(event.target.value);
	};

	return (
		<div className="pb-4">
			<Input
			type="text"
			placeholder="Search for a prescription..."
			value={searchTerm}
			onChange={handleSearchChange}
		/>

		</div>
		
		
	);
};


export default SearchBar;
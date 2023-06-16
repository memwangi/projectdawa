import { useState, ChangeEvent, FC } from "react";
import { IItem } from "@/lib/types";

interface SearchResultsModalProps {
	results: IItem[];
	onClose: () => void;
}

const SearchResultsModal: FC<SearchResultsModalProps> = ({
	results,
	onClose,
}) => {
	if (!results || results.length === 0) {
		return null;
	}

	return (
		<div
			className="fixed inset-0 flex items-center justify-center z-50"
			onClick={onClose}
		>
			<div
				className="bg-white p-6 rounded shadow-lg max-w-md w-full overflow-y-auto max-h-96"
				onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
			>
				<button className="absolute top-2 right-2" onClick={onClose}>
					&times; {/* You can replace this with an actual icon */}
				</button>
				<h2 className="text-xl font-bold mb-4">Search Results</h2>
				{results.map((result, index) => (
					<div key={index} className="border p-4 rounded mb-2">
						<h3>{result.name}</h3>
						<p>{result.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SearchResultsModal;

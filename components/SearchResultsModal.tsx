import React, { FC, useState, useEffect } from "react";
import { Modal } from "../components/ui/modal";
import { IItem } from "@/lib/types";
import SearchBar from "./SearchBar";

interface SearchFeatureProps {
  inventory: IItem[];
}

export const SearchFeature: FC<SearchFeatureProps> = ({ inventory }) => {
  const [results, setResults] = useState<IItem[]>([]);

  const handleSearch = (searchTerm: string) => {
    const matchedResults = inventory.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(matchedResults);
  };

  const handleCloseModal = () => {
    setResults([]);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Modal show={results.length > 0} onClose={handleCloseModal}>
        {results.map((result, index) => (
          <div key={index} className="border p-4 rounded mb-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{result.name}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </Modal>
    </div>
  );
};


// export default SearchFeature
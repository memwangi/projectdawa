import React, { FC, useState, useEffect } from "react";
import { Modal } from "../components/ui/modal";
import { IItem } from "@/lib/types";
import SearchBar from "@/components/SearchBar";

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
    <div className="flex flex-col">
      <SearchBar onSearch={handleSearch} />
      <Modal show={results.length > 0} onClose={handleCloseModal}>
        {results.map((result, index) => (
          <div key={index} className= "flex flex-col flex-grow border w-full p-4 rounded mb-2">
            <h3 className="scroll-m-20  font-semibold tracking-tight">{result.name}</h3>
            <p className="leading-7">{result.description}</p>
          </div>
        ))}
      </Modal>
    </div>
  );
};


export default SearchFeature
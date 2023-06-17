import React, { FC, useState, useEffect } from "react";
import { IItem } from "@/lib/types";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";


interface SearchResultsModalProps {
	results: IItem[];
	onClose: () => void;
}

const SearchResultsModal: FC<SearchResultsModalProps> = ({
	results,
	onClose,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(results.length > 0);
	}, [results]);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="flex items-center justify-center min-h-screen text-center sm:block sm:p-0" >
			<Dialog>
				<DialogTrigger> Search </DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit profile</DialogTitle>
						<DialogDescription>
							Make changes to your profile here. Click save when youre done.
						</DialogDescription>
					</DialogHeader>
					<div className="mt-2">
						{results.map((result, index) => (
							<div key={index} className="border p-4 rounded mb-2">
								<h3>{result.name}</h3>
								<p>{result.description}</p>
							</div>
						))}
					</div>
					<DialogFooter>
						<Button type="submit">Save changes</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SearchResultsModal;

import React, { FC } from "react";
import { Button } from "./button";

interface ModalProps {
	show: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ show, onClose, children }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="flex flex-column items-center gap-1 md:py-4 z-50 overflow-y-auto">
			<div
				className="flex align-top py-3 px-3 rounded-lg text-left overflow-y-auto shadow-lg transform transition-all sm:my-4 sm:max-w-lg sm:max-h-6"
				style={{ maxHeight: "80vh" }}
			>
				<div className=" w-full  sm:px-2 sm:pb-4">{children}</div>
			</div>
		</div>
	);
};

export default Modal;

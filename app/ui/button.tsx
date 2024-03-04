"use client";

import { useFormStatus } from "react-dom";
import { BiSync } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
const Button = ({ onClick, loading }: { onClick: any; loading: boolean }) => {
	return (
		<>
			{loading ? (
				<div className="flex justify-center w-full">
					<ImSpinner2 className="animate-spin h-6 w-6" />
				</div>
			) : (
				<button className="flex justify-center w-full" onClick={onClick}>
					<BiSync size={30} />
				</button>
			)}
		</>
	);
};

export default Button;

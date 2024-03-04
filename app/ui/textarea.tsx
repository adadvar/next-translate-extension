import Image from "next/image";
import React, { ChangeEventHandler, useState } from "react";

const Textarea = ({ onChange }: { onChange: any }) => {
	return (
		<div className="min-h-52 flex flex-col mb-3">
			<label className="flex w-full justify-start items-center mb-2">
				<Image
					src={"us-flag.png"}
					alt={"English"}
					width={32}
					height={32}
					unoptimized
				/>
				<div className="text-black text-lg ml-2">English</div>
			</label>
			<textarea
				rows={4}
				name="textarea"
				className="flex-grow border rounded-lg outline-none shadow-sm focus:border-red-300 bg-white w-full p-4"
				onChange={onChange}
			></textarea>
		</div>
	);
};

export default Textarea;

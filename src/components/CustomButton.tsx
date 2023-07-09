"use client";

import Image from "next/image";

import { CustomButtonProps } from "../types";

const CustomButton = ({
	title,
	buttonType,
	containerStyles,
	textStyles,
	rightIcon,
	handleClick,
}: CustomButtonProps) => {
	return (
		<button
			disabled={false}
			type={buttonType || "button"}
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
		>
			<span className={`flex-1 ${textStyles}`}>{title}</span>
			{rightIcon && (
				<Image
					src={`/${rightIcon}`}
					alt="icon"
					height={24}
					width={24}
					className="object-contain"
				/>
			)}
		</button>
	);
};

export default CustomButton;

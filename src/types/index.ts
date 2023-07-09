import { MouseEventHandler } from "react";

export interface ICar {
	city_mpg: number;
	combination_mpg: number;
	cylinders: number;
	drive: string;
	fuelType: string;
	highway_mpg: number;
	make: string;
	mode: string;
	model: string;
	transmission: string;
	year: number;
}

export interface CarDetailsProps {
	car: ICar;
	isOpen: boolean;
	closeModal: () => void;
}

export interface CustomButtonProps {
	title: string;
	buttonType?: "button" | "submit";
	containerStyles?: string;
	textStyles?: string;
	rightIcon?: string;
	isDisabled?: boolean;
	handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
	manufacturer: string;
	setManufacturer: (value: string) => void;
}

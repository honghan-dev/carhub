import { useState } from "react";

interface Car {
	id: number;
	name: string;
	// Add any other properties here
}

const useFetchCars = (initialCars: Car[]): { cars: Car[] } => {
	const [cars, setCars] = useState<Car[]>(initialCars);

	return { cars };
};

export const getServerSideProps = async () => {
	try {
		const headers: Record<string, string> = {
			"X-RapidAPI-Key": "b8c929ed6dmsh96f483b766ae400p1b5636jsnfeae0b3ebcd9",
			"X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
		};

		const response = await fetch(
			"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
			{ headers }
		);

		const result: Car[] = await response.json();
		const initialCars: Car[] = result.slice(0, 10); // Adjust the number of initial cars as needed

		return {
			props: {
				initialCars,
			},
		};
	} catch (error) {
		console.error(error);

		return {
			props: {
				initialCars: [],
			},
		};
	}
};

export default useFetchCars;

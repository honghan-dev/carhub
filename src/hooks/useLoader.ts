import { useState } from "react";

const useLoading = (): [boolean, () => void, () => void] => {
	const [isLoading, setIsLoading] = useState(false);

	const startLoading = () => {
		setIsLoading(true);
	};

	const stopLoading = () => {
		setIsLoading(false);
	};

	return [isLoading, startLoading, stopLoading];
};

export default useLoading;

import { useEffect, useState } from 'react';

const colors = {
	red: 'bg-red-500 animate-pulse',
	yellow: 'bg-yellow-500 animate-pulse',
	green: 'bg-green-500 animate-pulse',
};

type LightColor = keyof typeof colors;

export const useTrafficLight = () => {
	const [light, setLight] = useState<LightColor>('red');
	const [countDown, setCountDown] = useState(5);

	useEffect(() => {
		if (countDown == 0) return;
		const intervalId = setInterval(() => {
			setCountDown((prev) => prev - 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [countDown]);

	useEffect(() => {
		if (countDown > 0) return;
		setCountDown(5);

		setLight((prev) => {
			if (prev === 'red') return 'green';
			if (prev === 'green') return 'yellow';
			if (prev === 'yellow') return 'red';
			return prev;
		});
	}, [countDown, light]);

	return {
		// Props
		countDown,

		// Computed
		percentage: (countDown / 5) * 100,
		greenLight: light === 'green' ? colors.green : 'bg-gray-500',
		yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
		redLight: light === 'red' ? colors.red : 'bg-gray-500',
	};
};

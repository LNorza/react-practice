import { useEffect, useState } from 'react';

const colors = {
	red: 'bg-red-500 animate-pulse',
	yellow: 'bg-yellow-500 animate-pulse',
	green: 'bg-green-500 animate-pulse',
};

// type LightColor = 'red' | 'yellow' | 'green';

type LightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
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

	return (
		<div className='min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4'>
			<div className='flex flex-col items-center space-y-8'>
				<h1 className='text-white text-3xl font-thin'>
					Semafóro con useEffect
				</h1>
				<h2 className='text-white text-xl'>CountDown: {countDown}</h2>

				<div className='w-64 bg-gray-700 rounded-full h-2'>
					<div
						className='bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear'
						style={{ width: `${(countDown / 5) * 100}%` }}></div>
				</div>

				<div
					className={`w-32 h-32 ${light === 'red' ? colors.red : 'bg-gray-500'} rounded-full`}></div>

				<div
					className={`w-32 h-32 ${light === 'yellow' ? colors.yellow : 'bg-gray-500'} rounded-full`}></div>

				<div
					className={`w-32 h-32 ${light === 'green' ? colors.green : 'bg-gray-500'} rounded-full`}></div>
			</div>
		</div>
	);
};

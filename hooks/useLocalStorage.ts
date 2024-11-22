import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, fallbackValue: T) => {
	const [value, setValue] = useState<T>(() => fallbackValue);

	useEffect(() => {
		const stored = localStorage.getItem(key);
		setValue(stored ? (JSON.parse(stored) as T) : fallbackValue);
	}, [fallbackValue, key]);

	const updateValue = useCallback(
		(value: T) => {
			setValue(value);
			localStorage.setItem(key, JSON.stringify(value));
		},
		[key],
	);

	return [value, updateValue] as const;
};
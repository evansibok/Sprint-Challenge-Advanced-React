import { useState } from "react"

export const useLocalStorage = (key, initialValue = "") => {

	const [storedValue, setStoredValue] = useState(() => {

		try {
			const currentLocalValue = window.localStorage.getItem(key)

			return currentLocalValue ? JSON.parse(currentLocalValue) : initialValue
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	})

	const setValue = value => {

		try {
			setStoredValue(value)
			window.localStorage.setItem(key, JSON.stringify(value))
		} catch (error) {
			console.log(error)
		}
	}

	return [storedValue, setValue]
}
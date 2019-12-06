import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
	const [darkMode, setDarkMode] = useLocalStorage("dark-theme")

	useEffect(() => {
		darkMode
			? document.querySelector("body").classList.add("dark-mode")
			: document.querySelector("body").classList.remove("dark-mode")
	}, [darkMode])

	return [darkMode, setDarkMode]
}

import React from 'react'
import { useDarkMode } from './hooks/useDarkMode';
import styled from 'styled-components'

const ToggleCon = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 1em;

	.dark-mode__toggle {
		background: none;
		border: 0.15em solid #222;
		border-radius: 50px;
		height: 24px;
		position: relative;
		width: 40px;

		.toggle {
			background: #222;
			border-radius: 50px;
			height: 20px;
			top: 2px;
			left: 3px;
			position: absolute;
			transition: 0.4s;
			width: 20px;
		}
	}
`;

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useDarkMode(false)

	const toggleMode = (evt) => {
		evt.preventDefault();
		setDarkMode(!darkMode)
	}

	return (
		<ToggleCon className="toggleCon">
			<div className="dark-mode__toggle" onClick={toggleMode}>
				<div className={darkMode ? "toggle toggled" : "toggle"} />
			</div>
		</ToggleCon>
	)
}

export default DarkModeToggle
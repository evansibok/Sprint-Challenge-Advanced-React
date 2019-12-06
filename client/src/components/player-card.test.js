import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayerCard from './player-card';

jest.mock('axios', () => ({
	get: (url) => Promise.resolve({
		player: {}
	})
}))

afterEach(rtl.cleanup)

const player = {
	name: "Julie Ertz",
	country: "United States",
	searches: 8
}


it('displays props', () => {
	const wrapper = rtl.render(<PlayerCard player={player} />)

	const playerName = wrapper.queryByText(/Julie Ertz/i)

	expect(playerName).toBeInTheDocument()
});

it('has element with class=country', () => {

	const wrapper = rtl.render(<PlayerCard player={player} />)
	wrapper.debug()

	const countryElement = document.querySelector('[class="country"]')

	expect(countryElement).toHaveTextContent(/country:/i)
})

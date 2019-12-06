import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayerList from './player-list'

jest.mock('axios', () => ({
	get: (url) => Promise.resolve({
		players: []
	})
}))

afterEach(rtl.cleanup)

it('renders and receives data from promise', () => {
	const players = [{
		"name": "Alex Morgan",
		"country": "United States",
		"searches": 100,
		"id": 0
	}];

	const wrapper = rtl.render(<PlayerList players={players} />)

	const propsText = wrapper.getByText(/Alex Morgan/i)

	expect(propsText).toBeInTheDocument()

})
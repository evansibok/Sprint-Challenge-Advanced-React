import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayerList from './player-list'

afterEach(rtl.cleanup)

it('renders without crashing', () => {

	// const wrapper = rtl.render(<PlayerList />)
	// wrapper.debug()

	// // const cardDisplayed = wrapper.getByText(/Carli Lloyd/i)

	// // expect(cardDisplayed).toBeInTheDocument()

})
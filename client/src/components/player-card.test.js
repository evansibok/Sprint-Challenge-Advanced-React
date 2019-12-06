import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PlayerCard from './player-card';


afterEach(rtl.cleanup)

it('displays country text', () => {
	// const wrapper = rtl.render(<PlayerCard />)
	// wrapper.debug()

	// // const countryText = wrapper.queryByText(/country/i)

	// // expect(countryText).toBeInTheDocument()
});


import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App';

afterEach(rtl.cleanup)

it('renders without crashing & displays world cup text', () => {
  const wrapper = rtl.render(<App />)

  const worldCupText = wrapper.queryByText(/world cup/i)

  expect(worldCupText).toBeInTheDocument()
});


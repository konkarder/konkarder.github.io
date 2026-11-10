import { expect, test } from 'vitest'
import { render } from '@testing-library/react'
import App from '../src/App.jsx'

test.each(['/', '/hakkimizda', '/etkinlikler', '/sirketler'])('renders %s', (path) => {
  window.location.hash = '#' + path
  const { container } = render(<App />)
  expect(container.querySelector('h1, h2')?.textContent).toBeTruthy()
})

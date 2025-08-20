import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import { data } from './data'

test('Page', () => {
  render(<Home data={data} currentPage={1} limit={10} />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Luke Skywalker' })
  ).toBeDefined()
})

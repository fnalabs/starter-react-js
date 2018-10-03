/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Nav } from '../../../../src/assets/components/layout/Nav.jsx'

describe('<Nav />', () => {
  test('should render homepage nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Cookie Policy page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/cookie']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('should render Privacy Policy page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/privacy']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

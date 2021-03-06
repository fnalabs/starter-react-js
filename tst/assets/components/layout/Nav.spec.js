/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Nav } from 'layout'

describe('<Nav />', () => {
  it('should render homepage nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Cookie Policy page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/cookie']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should render Privacy Policy page nav correctly', () => {
    const tree = renderer
      .create(<MemoryRouter initialEntries={['/privacy']}><Nav /></MemoryRouter>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

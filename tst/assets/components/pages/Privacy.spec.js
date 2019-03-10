/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Privacy } from 'pages'

jest.mock('react-ga')

describe('<Privacy />', () => {
  test('should render Privacy Policy static content', () => {
    const tree = renderer.create(<MemoryRouter><Privacy location={{ pathname: '/privacy' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

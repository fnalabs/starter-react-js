/* eslint-env jest */
import React from 'react'
import { MemoryRouter } from 'react-router'
import renderer from 'react-test-renderer'

import { Cookie } from '../../../../src/assets/components/pages/policies/Cookie.jsx'

jest.mock('react-ga')

describe('<Cookie />', () => {
  test('should render Cookie Policy static content', () => {
    const tree = renderer.create(<MemoryRouter><Cookie location={{ pathname: '/cookie' }} /></MemoryRouter>).toJSON()

    expect(tree).toMatchSnapshot()
  })
})

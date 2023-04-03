import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Cookie from '../../../src/app/(policies)/cookie/page'

describe('<Cookie />', () => {
  afterEach(cleanup)

  it('should render Cookie Policy static content', () => {
    const { asFragment } = render(<Cookie />)
    expect(asFragment()).toMatchSnapshot()
  })
})

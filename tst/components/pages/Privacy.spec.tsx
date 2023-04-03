import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Privacy from '../../../src/app/(policies)/privacy/page'

describe('<Privacy />', () => {
  afterEach(cleanup)

  it('should render Privacy Policy static content', () => {
    const { asFragment } = render(<Privacy />)
    expect(asFragment()).toMatchSnapshot()
  })
})

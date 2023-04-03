import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Home from '../../../src/app/page'

describe('<Home />', () => {
  afterEach(cleanup)

  it('should render Home static content', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    Homepage content
  </div>
</DocumentFragment>
`)
  })
})

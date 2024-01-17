import React from 'react'
import { cleanup, render } from '@testing-library/react'
import NotFound from '../../../src/app/not-found'

describe('<NotFound />', () => {
  afterEach(cleanup)

  it('should render Not Found static content', () => {
    const { asFragment } = render(<NotFound />)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div>
    <h2>
      Not Found
    </h2>
    <p>
      This is not the page you're looking for
    </p>
  </div>
</DocumentFragment>
`)
  })
})

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { Footer } from '../../../src/components/layout'

describe('<Footer />', () => {
  afterEach(cleanup)

  it('should render static content correctly', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <footer>
    <nav>
      <h5>
        Sitemap
      </h5>
      <div>
        <a
          href="/"
        >
          Home
        </a>
      </div>
      <h5>
        Policies
      </h5>
      <div>
        <a
          href="/cookie"
        >
          Cookie
        </a>
      </div>
      <div>
        <a
          href="/privacy"
        >
          Privacy
        </a>
      </div>
    </nav>
  </footer>
</DocumentFragment>
`)
  })
})

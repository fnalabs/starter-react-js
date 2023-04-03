import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Layout from '../../../src/app/layout'

jest.mock('react-ga4')

describe('<Layout />', () => {
  afterEach(cleanup)

  it('should render Layout content correctly', () => {
    const { asFragment } = render(<Layout>test</Layout>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <header>
    <nav>
      <a
        href="/"
      >
        Home
      </a>
    </nav>
  </header>
  <main>
    test
  </main>
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
  <div
    class="CookieConsent"
    style="bottom: 0px;"
  >
    <div
      class=""
    >
      We use cookies to provide you the best experience. By clicking 
      <strong>
        Accept
      </strong>
       you are agreeing to our 
      <a
        href="/cookie"
      >
        Cookie
      </a>
       and 
      <a
        href="/privacy"
      >
        Privacy
      </a>
       policies.
    </div>
    <div
      class=""
    >
      <button
        aria-label="Decline cookies"
        class=""
        id="rcc-decline-button"
      >
        Decline
      </button>
      <button
        aria-label="Accept cookies"
        class=""
        id="rcc-confirm-button"
      >
        Accept
      </button>
    </div>
  </div>
</DocumentFragment>
`)
  })
})

import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render } from '@testing-library/react'
import { CookieConsent } from '../../../src/components/common'

jest.mock('react-ga4')

describe('<CookieConsent />', () => {
  afterEach(cleanup)

  // TODO write unit tests to cover accept and decline event handlers
  it('should render test content only', () => {
    const { asFragment } = render(<CookieConsent>test content</CookieConsent>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  test content
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

  it('should render all static content correctly', () => {
    const { asFragment } = render(<CookieConsent isConsent>test content</CookieConsent>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  test content
</DocumentFragment>
`)
  })
})

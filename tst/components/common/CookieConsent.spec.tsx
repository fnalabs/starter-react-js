import React from 'react'
import '@testing-library/jest-dom'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConsentActionType } from '../../../src/contexts/Consent'
import CookieConsent from '../../../src/components/common/CookieConsent'

const mockDispatch = jest.fn()
jest.mock('react-ga4')
jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/')
}))
jest.mock('../../../src/contexts/Consent', () => ({
  ConsentActionType: { DECLINED: 0, ACCEPTED: 1 },
  useConsent: jest.fn().mockReturnValueOnce(true).mockReturnValue(false),
  useConsentDispatch: () => mockDispatch
}))

describe('<CookieConsent />', () => {
  afterEach(cleanup)

  it('should render all static content correctly', () => {
    const { asFragment } = render(<CookieConsent>test content</CookieConsent>)
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  test content
</DocumentFragment>
`)
  })

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

  it('should handleOnAccept successfully', async () => {
    render(<CookieConsent>test content</CookieConsent>)

    await userEvent.click(screen.getByText('Accept', { selector: 'button', exact: false }))

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith({ type: ConsentActionType.ACCEPTED })
  })

  // FIXME
  // it('should handleOnDecline successfully', async () => {
  //   render(<CookieConsent>test content</CookieConsent>)

  //   await userEvent.click(screen.getByText('Decline', { selector: 'button', exact: false }))

  //   expect(mockDispatch).toHaveBeenCalledTimes(1)
  //   expect(mockDispatch).toHaveBeenCalledWith({ type: ConsentActionType.DECLINED })
  // })
})

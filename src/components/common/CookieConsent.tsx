'use client'

import React, { FC, ReactNode, useState } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga4'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Provider } from '../contexts/Consent'
import meta from '../../metadata'

if (typeof process.env.NEXT_PUBLIC_GA_ID !== 'undefined') {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID)
  ReactGA.set({ dimension1: 'online' })
}

export const getConsent = (): boolean => {
  return (Cookies.get('CookieConsent') === 'true' ||
    globalThis?.sessionStorage?.getItem('CookieConsent') === 'true') ??
    false
}

export interface IConsent {
  children: ReactNode
  isConsent?: boolean
}
const Consent: FC<IConsent> = ({ children, isConsent = false }) => {
  const [state, setState] = useState(getConsent() || isConsent)
  const pathname = usePathname()

  const setConsent = (consent: boolean): void => {
    globalThis?.sessionStorage?.setItem('CookieConsent', String(consent))
    setState(consent)
  }

  const handleOnAccept = (pathname: `/${string}`): void => {
    ReactGA.send({ hitType: 'pageview', page: pathname, title: meta[pathname].title })
    setConsent(true)
  }

  const handleOnDecline = (): void => {
    if (Cookies.get('CookieConsent') === 'true') Cookies.set('CookieConsent', 'false')
    setConsent(false)
  }

  return (
    <Provider value={state}>
      {children}

      {!state &&
        <CookieConsent
          disableStyles
          enableDeclineButton
          buttonText='Accept'
          declineButtonText='Decline'
          onAccept={() => handleOnAccept(pathname as `/${string}`)}
          onDecline={handleOnDecline}
        >
          We use cookies to provide you the best experience. By clicking <strong>Accept</strong> you are agreeing to our <Link href='/cookie'>Cookie</Link> and <Link href='/privacy'>Privacy</Link> policies.
        </CookieConsent>}
    </Provider>
  )
}
export default Consent

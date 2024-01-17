'use client'

import React, { FC, ReactNode } from 'react'
import CookieConsent, { Cookies } from 'react-cookie-consent'
import ReactGA from 'react-ga4'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ConsentActionType, useConsent, useConsentDispatch } from '../../contexts/Consent'
import { GA_ID } from '../../config'
import meta from '../../metadata'

if (typeof GA_ID === 'string') {
  ReactGA.initialize(GA_ID)
  ReactGA.set({ dimension1: 'online' })
}

export interface IConsent {
  children: ReactNode
}
const Consent: FC<IConsent> = ({ children }) => {
  const consent = useConsent()
  const dispatch = useConsentDispatch()
  const pathname = usePathname()

  const setConsent = (consent: ConsentActionType): void => {
    globalThis?.sessionStorage?.setItem('CookieConsent', Boolean(consent).toString())
    dispatch({ type: consent })
  }

  const handleOnAccept = (): void => {
    ReactGA.send({ hitType: 'pageview', page: pathname, title: meta[pathname as `/${string}`].title })
    setConsent(ConsentActionType.ACCEPTED)
  }

  const handleOnDecline = (): void => {
    if (Cookies.get('CookieConsent') === 'true') Cookies.set('CookieConsent', 'false')
    setConsent(ConsentActionType.DECLINED)
  }

  return (
    <>
      {children}

      {!consent &&
        <CookieConsent
          disableStyles
          enableDeclineButton
          buttonText='Accept'
          declineButtonText='Decline'
          onAccept={handleOnAccept}
          onDecline={handleOnDecline}
        >
          We use cookies to provide you the best experience. By clicking <strong>Accept</strong> you are agreeing to our <Link href='/cookie'>Cookie</Link> and <Link href='/privacy'>Privacy</Link> policies.
        </CookieConsent>}
    </>
  )
}
export default Consent

'use client'

import React, { FC, Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'
import { Cookies } from 'react-cookie-consent'

export enum ConsentActionType { DECLINED, ACCEPTED }
export interface IConsentAction {
  type: ConsentActionType
}
export interface IConsentProvider {
  children: ReactNode
}

const getConsent = (): boolean => {
  return (Cookies.get('CookieConsent') === 'true' || globalThis?.sessionStorage?.getItem('CookieConsent') === 'true')
}

const initialState = getConsent()
const Consent = createContext(initialState)
const ConsentDispatch = createContext(undefined as unknown as Dispatch<IConsentAction>)

export const consentReducer = (consent: boolean, action: IConsentAction): boolean => {
  switch (action.type) {
    case ConsentActionType.ACCEPTED:
      return true
    case ConsentActionType.DECLINED:
      return false
    default:
      throw Error(`Unknown Consent action: "${action.type as string}"`)
  }
}

export const ConsentProvider: FC<IConsentProvider> = ({ children }) => {
  const [consent, dispatch] = useReducer(consentReducer, initialState)

  return (
    <Consent.Provider value={consent}>
      <ConsentDispatch.Provider value={dispatch}>
        {children}
      </ConsentDispatch.Provider>
    </Consent.Provider>
  )
}

export const useConsent = (): boolean => useContext(Consent)
export const useConsentDispatch = (): Dispatch<IConsentAction> => useContext(ConsentDispatch)

'use client'

import React, { FC, Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'

export enum ConsentActionType { ACCEPTED, DECLINED }
export interface IConsentAction {
  type: ConsentActionType
}
export interface IConsentProvider {
  children: ReactNode
}

const Consent = createContext(false)
const ConsentDispatch = createContext(undefined as unknown as Dispatch<IConsentAction>)

const consentReducer = (consent: boolean, action: IConsentAction): boolean => {
  switch (action.type) {
    case ConsentActionType.ACCEPTED:
      return true
    case ConsentActionType.DECLINED:
      return false
    default:
      throw Error(`Unknown Consent action: "${action.type}"`)
  }
}

export const ConsentProvider: FC<IConsentProvider> = ({ children }) => {
  const [consent, dispatch] = useReducer(consentReducer, false)

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

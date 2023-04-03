'use client'

import { createContext } from 'react'

const Consent = createContext(false)

export const { Consumer, Provider } = Consent
export default Consent

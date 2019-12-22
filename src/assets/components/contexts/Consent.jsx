import React from 'react'

const Consent = React.createContext({ isConsent: false })

export const { Consumer, Provider } = Consent
export default Consent

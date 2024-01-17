import React, { FC, ReactNode } from 'react'
import { CookieConsent, ServiceWorker } from '../components/common'
import { Footer, Header } from '../components/layout'
import { ConsentProvider } from '../contexts/Consent'
import meta from '../metadata'
import { IS_PROD } from '../config'
import './layout.module.css'

export const metadata = {
  metadataBase: meta.common.baseUrl
}

export interface ILayout {
  children: ReactNode
}
const Layout: FC<ILayout> = ({ children }: ILayout) => {
  return (
    <html lang='en'>
      <body>
        <ConsentProvider>
          <CookieConsent>
            <Header />
            <main>{children}</main>
            <Footer />
          </CookieConsent>
        </ConsentProvider>
        {IS_PROD && <ServiceWorker />}
      </body>
    </html>
  )
}

export default Layout

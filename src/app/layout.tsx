import React, { FC, ReactNode } from 'react'
import { CookieConsent } from '../components/common'
import { Footer, Header } from '../components/layout'
import './layout.module.css'

export interface ILayout {
  children: ReactNode
}
const Layout: FC<ILayout> = ({ children }: ILayout) => (
  <html lang='en'>
    <body>
      <CookieConsent>
        <Header />
        <main>{children}</main>
        <Footer />
      </CookieConsent>
    </body>
  </html>
)

export default Layout

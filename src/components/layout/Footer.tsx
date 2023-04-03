import React, { FC } from 'react'
import Link from 'next/link'

const Footer: FC = () => (
  <footer>
    <nav>
      <h5>Sitemap</h5>
      <div><Link href='/'>Home</Link></div>
      <h5>Policies</h5>
      <div><Link href='/cookie'>Cookie</Link></div>
      <div><Link href='/privacy'>Privacy</Link></div>
    </nav>
  </footer>
)
export default Footer

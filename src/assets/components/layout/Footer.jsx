import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => (
  <footer>
    <nav>
      <h5>Sitemap</h5>
      <div><Link to='/'>Home</Link></div>
      <h5>Policies</h5>
      <div><Link to='/cookie'>Cookie</Link></div>
      <div><Link to='/privacy'>Privacy</Link></div>
    </nav>
  </footer>
)

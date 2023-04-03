import React, { FC } from 'react'
import meta from '../metadata'

const { title, description, url } = meta['/']
export const metadata = {
  title,
  description,
  canonical: url,
  openGraph: {
    title,
    description,
    url,
    siteName: meta.common.siteName,
    type: meta.common.type
  }
}

const Home: FC = () => (<div>Homepage content</div>)
export default Home

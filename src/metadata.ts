export interface IMetaPage {
  name: string
  title: string
  description: string
  url: string
  priority: number
}
export interface IMetadata {
  common: {
    siteName: string
    baseUrl: string
    imageUrl: string
    type: string
    cacheTime: number
  }
  [key: `/${string}`]: IMetaPage
}

export const Metadata: IMetadata = {
  common: {
    siteName: 'Example',
    baseUrl: 'https://example.com',
    imageUrl: 'https://example.com/icon.png',
    type: 'website',
    cacheTime: 600000
  },
  '/': {
    name: 'home',
    title: 'Example',
    description: 'Home',
    url: 'https://example.com',
    priority: 1.0
  },
  '/cookie': {
    name: 'cookie',
    title: 'Example | Cookie Policy',
    description: 'Cookie policy for the website',
    url: 'https://example.com/cookie',
    priority: 0.0
  },
  '/privacy': {
    name: 'privacy',
    title: 'Example | Privacy Policy',
    description: 'Privacy policy for the website',
    url: 'https://example.com/privacy',
    priority: 0.0
  }
}
export default Metadata

import { MetadataRoute } from 'next'

const Manifest: () => MetadataRoute.Manifest = () => ({
  name: 'Example React App',
  short_name: 'Example',
  description: 'Starter Kit for React PWAs',
  start_url: '/',
  display: 'standalone',
  orientation: 'any',
  prefer_related_applications: false,
  background_color: '#ffffff',
  theme_color: '#ffffff',
  icons: [
    {
      src: '/favicon.ico',
      sizes: 'any',
      type: 'image/x-icon'
    }
  ]
})

export default Manifest

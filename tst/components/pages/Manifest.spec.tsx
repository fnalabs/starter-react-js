import manifest from '../../../src/app/manifest'

describe('Manifest', () => {
  it('should produce manifest JSON', () => {
    expect(manifest()).toMatchInlineSnapshot(`
{
  "background_color": "#ffffff",
  "description": "Starter Kit for React PWAs",
  "display": "standalone",
  "icons": [
    {
      "sizes": "any",
      "src": "/favicon.ico",
      "type": "image/x-icon",
    },
  ],
  "name": "Example React App",
  "orientation": "any",
  "prefer_related_applications": false,
  "short_name": "Example",
  "start_url": "/",
  "theme_color": "#ffffff",
}
`)
  })
})

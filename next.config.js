const { InjectManifest } = require('workbox-webpack-plugin')
const pkg = require('./package.json')
const meta = require('./metadata.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer }) => {
    if (!dev && !isServer) {
      config.plugins.push(new InjectManifest({
        dontCacheBustURLsMatching: /\.\w{8}\./,
        manifestTransforms: [async manifest => {
          // generate new manifest with only static output artifacts
          const newManifest = manifest.filter(artifact => artifact.url.startsWith('/_next/static/'))

          // add pages and remaining artifacts
          for (const page in meta) {
            if (page !== 'common') {
              newManifest.push(
                { url: page, revision: pkg.version },
                { url: page === '/' ? `${page}index.txt` : `${page}.txt`, revision: pkg.version }
              )
            }
          }
          newManifest.push(
            { url: '/404', revision: pkg.version },
            { url: '/sitemap.xml', revision: pkg.version },
            { url: '/manifest.webmanifest', revision: pkg.version }
          )

          return { manifest: newManifest, warnings: [] }
        }],
        swDest: 'sw.js',
        swSrc: './src/worker.js'
      }))
    }

    return config
  }
}

module.exports = nextConfig

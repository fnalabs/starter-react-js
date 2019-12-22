/* eslint-env serviceworker */
/* global workbox */

// constants
const urls = [{ url: '.' }, { url: '/cookie' }, { url: '/privacy' }]
const precacheManifest = !self.__precacheManifest
  ? urls
  : self.__precacheManifest.reduce((ret, val) => {
    if (val.revision) for (const url of urls) url.revision = val.revision
    ret.push(val)
    return ret
  }, urls)

// event handlers
self.addEventListener('install', (event) => self.skipWaiting())

// config
workbox.core.setCacheNameDetails({
  prefix: 'era'
})
workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline'
  }
})

// precache and routing
workbox.precaching.precacheAndRoute(precacheManifest)
workbox.precaching.cleanupOutdatedCaches()

workbox.routing.registerRoute(
  /.*google-analytics\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'analytics',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)
workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|ico)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'era-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 2592000 // 30 Days
      })
    ]
  })
)

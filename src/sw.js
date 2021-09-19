importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js'
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'image',
  new workbox.strategies.CacheFirst({ cacheName: 'images' })
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'style',
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'style',
  })
)

workbox.routing.registerRoute(
  ({ url }) =>
    url.origin === self.location.origin &&
    url.pathname.startsWith('/tags/'),
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 2,
    cacheName: 'tags',
  })
)

workbox.routing.registerRoute(
  ({ url }) =>
    url.origin === self.location.origin &&
    url.pathname.startsWith('/articles/'),
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 2,
    cacheName: 'recipes',
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.pathname === '/',
  new workbox.strategies.NetworkFirst({
    networkTimeoutSeconds: 2,
    cacheName: 'frontpage',
  })
)

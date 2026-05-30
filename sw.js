const CACHE = 'rummy-v14';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png',
  './icon-maskable-512.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin && !url.hostname.includes('googleapis') && !url.hostname.includes('gstatic') && !url.hostname.includes('tailwindcss')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((response) => {
          if (!response || !response.ok) return response;
          const clone = response.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
          return response;
        })
        .catch(() => {
          if (e.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

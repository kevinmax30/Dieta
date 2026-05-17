const CACHE = 'dieta-v2';
const CORE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Cache-first para fotos (viven en el repo, no cambian seguido)
// Network-first para el HTML (para recibir actualizaciones)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isFoto = url.pathname.includes('/fotos/');
  const isCore = CORE.some(c => e.request.url.endsWith(c.replace('./','')));

  if (isFoto) {
    // Cache-first: una vez descargada la foto, siempre de cache
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
          }
          return res;
        }).catch(() => new Response('', { status: 404 }));
      })
    );
  } else {
    // Network-first para el resto (index.html, etc.)
    e.respondWith(
      fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type !== 'opaque') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
    );
  }
});

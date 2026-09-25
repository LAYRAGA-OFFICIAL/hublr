/* HUBLR Service Worker v0.3.0 */
const CACHE = 'hublr-v0.3.0';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './src/css/main.css',
    './src/css/base.css',
    './src/css/layout.css',
    './src/css/components.css',
    './src/css/dashboard.css',
    './src/css/animations.css',
    './src/css/responsive.css',
    './src/css/utilities.css',
    './src/js/config.js',
    './src/js/app.js',
    './src/js/core/storage.js',
    './src/js/core/state.js',
    './src/js/core/i18n.js',
    './src/js/utils/dom.js',
    './src/js/utils/helpers.js',
    './src/js/modules/clock.js',
    './src/js/modules/theme.js',
    './src/js/modules/theme-colors.js',
    './src/js/modules/wallpaper-manager.js',
    './src/js/modules/animations.js',
    './src/js/modules/calculator.js',
    './src/js/modules/autosuggest.js',
    './src/js/modules/search.js',
    './src/js/modules/search-enhanced.js',
    './src/js/modules/bookmarks.js',
    './src/js/modules/notes.js',
    './src/js/modules/todo.js',
    './src/js/modules/weather.js',
    './src/js/modules/backup.js',
    './src/js/modules/dashboard.js',
    './src/js/modules/settings.js',
    './src/assets/icons/logo.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        caches.match(e.request).then((cached) =>
            cached || fetch(e.request).then((res) => {
                return caches.open(CACHE).then((cache) => {
                    if (e.request.url.startsWith(self.location.origin)) {
                        cache.put(e.request, res.clone());
                    }
                    return res;
                });
            }).catch(() => cached)
        )
    );
});
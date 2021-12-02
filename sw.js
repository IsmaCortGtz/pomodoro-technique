var cacheName = 'PomodoroTechnique_v1';
var filesToCache = [
  './',
  './scripts/events.js',
  './scripts/index.js',
  './scripts/modules.js',
  './sources/icon.png',
  './styles/content-counter.css',
  './styles/content-list.css',
  './styles/global.css',
  './styles/header.css',
  './styles/options.css',
  './styles/responsive.css',
  './index.html',
  './manifest.json',
  './sw.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
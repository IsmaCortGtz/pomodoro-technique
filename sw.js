var filesToCache = [
	"/",
	"/PomodoroTechnique/",
	"/PomodoroTechnique/index.html",
	"/PomodoroTechnique/scripts/events.js",
	"/PomodoroTechnique/scripts/index.js",
	"/PomodoroTechnique/scripts/modules.js",
	"/PomodoroTechnique/styles/content-counter.css",
	"/PomodoroTechnique/styles/content-list.css",
	"/PomodoroTechnique/styles/global.css",
	"/PomodoroTechnique/styles/header.css",
	"/PomodoroTechnique/styles/options.css",
	"/PomodoroTechnique/styles/responsive.css"
];
var cacheName = 'PomodoroTechnique_cache';
/* var filesToCache = [
	"/",
	"/index.html",
	"/scripts/events.js",
	"/scripts/index.js",
	"/scripts/modules.js",
	"/styles/content-counter.css",
	"/styles/content-list.css",
	"/styles/global.css",
	"/styles/header.css",
	"/styles/options.css",
	"/styles/responsive.css"
]; */

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
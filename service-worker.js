
/* var filesToCache = [
	"./",
	"./index.html",
	"./scripts/events.js",
	"./scripts/index.js",
	"./scripts/modules.js",
	"./styles/content-counter.css",
	"./styles/content-list.css",
	"./styles/global.css",
	"./styles/header.css",
	"./styles/options.css",
	"./styles/responsive.css"
]; */

let cacheName = "PomodoroTechnique_cache";// 👈 any unique name
let filesToCache = [
  "/PomodoroTechnique/", // 👈 your repository name , both slash are important
  "service-worker.js",
	"scripts/events.js",
	"scripts/index.js",
	"scripts/modules.js",
	"styles/content-counter.css",
	"styles/content-list.css",
	"styles/global.css",
	"styles/header.css",
	"styles/options.css",
	"styles/responsive.css",
  "manifest.json",
  "sources/icon.png"
  // add your assets here 
];

self.addEventListener("install", function (event) {
  event.waitUntil(caches.open(cacheName).then((cache) => {
    console.log('installed successfully')
    return cache.addAll(filesToCache);
  }));
});

self.addEventListener('fetch', function (event) {

  if (event.request.url.includes('clean-cache')) {
    caches.delete(cacheName);
    console.log('Cache cleared')
  }

  event.respondWith(caches.match(event.request).then(function (response) {
    if (response) {
      console.log('served form cache')
    } else {
      console.log('Not serving from cache ', event.request.url)
    }
    return response || fetch(event.request);
  })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('service worker: Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
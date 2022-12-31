var APP_PREFIX = "PomodoroTechnique_";
var VERSION = "version_1.1.1";
var CACHE_NAME = APP_PREFIX + VERSION;
var URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./scripts/events.js",
  "./scripts/index.js",
  "./scripts/modules.js",
  "./styles/content-counter.css",
  "./styles/content-list.css",
  "./styles/global.css",
  "./styles/header.css",
  "./styles/options.css",
  "./styles/responsive.css",
  "./sources/icon.png",
  "./sources/alarm.svg",
  "./sources/exit.svg",
  "./sources/pause.svg",
  "./sources/play.svg",
  "./sources/settings.svg"
];




self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (request) {
      return request || fetch(e.request);
    })
  )
})


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(URLS)
    })
  )
})


self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
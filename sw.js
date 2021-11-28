self.addEventListener("install", function(event){
	event.waitUntil(
	 	caches.open("sw-cache").then(function(cache){;
			return cache.add("index.html", "scripts/events.js", "scripts/index.js", "scripts/modules.js", "styles/content-counter.css", "content-list.css", "styles/global.css", "styles/header.css", "styles/options.css", "styles/responsive.css");
		});
	); 
});


self.addEventListener("fetch", function(event){
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		}); 
	);
});

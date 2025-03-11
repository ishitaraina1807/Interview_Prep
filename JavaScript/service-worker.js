const CACHE_NAME = "my-cache-v1";

const urlsToCache = [
    "./",  // Cache the current directory (your HTML file)
    "./service-worker.html"  // Cache the main page, not the worker itself
];

// INSTALL - Cache files
self.addEventListener("install", (event) => {
    console.log("Service Worker: Installing...");
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log("Service Worker: Caching files...");
                return cache.addAll(urlsToCache)
                    .catch(err => console.error("Cache addAll failed:", err));
            })
    );
});

// ACTIVATE - Cleanup old caches
self.addEventListener("activate", (event) => {
    console.log("Service Worker: Activated");
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(  // Fixed `promise.all` typo
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Service Worker: Clearing old cache...");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// FETCH - Serve cached files when offline
self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetching", event.request.url);
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))  // Serve from cache or fetch online
            .catch(() => new Response("You are offline!"))  // Show a fallback message if offline
    );
});

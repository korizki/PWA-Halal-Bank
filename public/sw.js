// self.addEventListener('install', function(event) {
//   console.log('[Service Worker] Installing Service Worker ...', event)
//   event.waitUntil(
//     caches.open('first-app')
//       .then(function(cache) {
//         cache.addAll([
//           '/',
//           '/index.html',
//           '/src/css/app.css',
//           '/src/js/app.js'
//         ])
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('activate', function(event) {
//   console.log('[Service Worker] Activating Service Worker ... ', event)
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(res) {
//         return res;
//       })
//   );
// });

self.addEventListener("install", function(event){
  console.log('[Service Worker] Installing Service Worker ...', event);
});
self.addEventListener("activate", function(event){
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim()
})
self.addEventListener("fetch", function(event){
  console.log('[Service Worker] Fetching something ...', event);
  event.respondWith(fetch(event.request));
})

self.addEventListener('fetch', function(event) {
    if (event.request.url.indexOf('dummy.js') != -1) {
      event.respondWith(fetch('empty.js'));
    }
    else if (event.request.url.indexOf('missing.png') != -1) {
      event.respondWith(fetch('square.png'));
    }
});

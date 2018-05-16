self.addEventListener('fetch', e => {
  if (e.request.url.indexOf('/non-existent-script.js') != -1)
    e.respondWith(fetch('post-message-on-load-worker.js'));
});

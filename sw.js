self.addEventListener('fetch', function(event) {
    // هذا الكود يبقي التطبيق يعمل بسلاسة عند التصفح
    event.respondWith(fetch(event.request));
});
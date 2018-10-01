self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
           return cache.addAll([
             '/',
             '/css/styles.css',
             '/data/restaurants.json',
             '/img/1.jpg',
             '/img/2.jpg',
             '/img/3.jpg',
             '/img/4.jpg',
             '/img/5.jpg',
             '/img/6.jpg',
             '/img/7.jpg',
             '/img/8.jpg',
             '/img/9.jpg',
             '/img/10.jpg',
             '/js/dbhelper.js',
             '/js/main.js',
             '/js/restaurant_info.js',
             '/index.html',
             '/restaurant.html'
           ]);
        }).catch(function(err) {
            console.log(err);
        })
    );
});

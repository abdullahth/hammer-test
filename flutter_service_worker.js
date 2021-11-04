'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b01fba362d749367b3867f30dbec6724",
"assets/assets/about-mobile.webp": "436667c7e3ee538c274c4ea166d1edb4",
"assets/assets/about.webp": "d022295431b531f0205405c209d44699",
"assets/assets/blog-background.webp": "d11182a64c7d177bf2c920db3df43d2b",
"assets/assets/blog-phone-banner.webp": "eb619ad1824cbbe34b26de1fcdc8fa0c",
"assets/assets/blog-solutions-banner.webp": "464e27e7170aa7c56d1ed42e2f27e008",
"assets/assets/clouds-back.png": "721c3606f797ab659c997b31eb1832d7",
"assets/assets/clouds-front.png": "b7e05bc9df2028591eca515ecc04ebf4",
"assets/assets/contact-page-banner.jpg": "c8f3200f94b44a414a8daa8420c1fcde",
"assets/assets/facebook-icon.webp": "c549ae968b61af461aad57949029c19f",
"assets/assets/hammer-car-protector.jpg": "c04c6315afa398c48f5466f476cf0369",
"assets/assets/home-card-five-phone.png": "83a0141c5a22c8a2fb9658a54b9ea744",
"assets/assets/home-card-four-phone.png": "3f1aac3dc0285691acc25cd5df6c2e83",
"assets/assets/home-card-one-phone.png": "272adf7d12d72c7f42ac9e5d3fba1b6a",
"assets/assets/home-card-three-bumbers.png": "b5269d27b1cbc833a3819214b643d8f7",
"assets/assets/home-card-two-phone.png": "a8578208e6c219603c8a3940c9e3b289",
"assets/assets/home-first-background.webp": "71472cd16e87470babdd4b734e0cde01",
"assets/assets/home-first-card-one-background.webp": "b0cb312c7a4665945e1f9d7862930dec",
"assets/assets/home-first-card-three-background.webp": "a725f423dfe8b5eb8422bc83d4a03267",
"assets/assets/home-first-card-two-background.webp": "875e75a22a6812edb8864528cf16421a",
"assets/assets/images/about-mobile.webp": "436667c7e3ee538c274c4ea166d1edb4",
"assets/assets/images/about.webp": "d022295431b531f0205405c209d44699",
"assets/assets/images/blog-background.webp": "d11182a64c7d177bf2c920db3df43d2b",
"assets/assets/images/blog-phone-banner.webp": "eb619ad1824cbbe34b26de1fcdc8fa0c",
"assets/assets/images/blog-solutions-banner.webp": "464e27e7170aa7c56d1ed42e2f27e008",
"assets/assets/images/clouds-back.png": "721c3606f797ab659c997b31eb1832d7",
"assets/assets/images/clouds-front.png": "b7e05bc9df2028591eca515ecc04ebf4",
"assets/assets/images/contact-page-banner.jpg": "c8f3200f94b44a414a8daa8420c1fcde",
"assets/assets/images/facebook-icon.webp": "c549ae968b61af461aad57949029c19f",
"assets/assets/images/hammer-car-protector.jpg": "c04c6315afa398c48f5466f476cf0369",
"assets/assets/images/home-card-five-phone.png": "83a0141c5a22c8a2fb9658a54b9ea744",
"assets/assets/images/home-card-four-phone.png": "3f1aac3dc0285691acc25cd5df6c2e83",
"assets/assets/images/home-card-one-phone.png": "272adf7d12d72c7f42ac9e5d3fba1b6a",
"assets/assets/images/home-card-three-bumbers.png": "b5269d27b1cbc833a3819214b643d8f7",
"assets/assets/images/home-card-two-phone.png": "a8578208e6c219603c8a3940c9e3b289",
"assets/assets/images/home-first-background.webp": "71472cd16e87470babdd4b734e0cde01",
"assets/assets/images/home-first-card-one-background.webp": "b0cb312c7a4665945e1f9d7862930dec",
"assets/assets/images/home-first-card-three-background.webp": "a725f423dfe8b5eb8422bc83d4a03267",
"assets/assets/images/home-first-card-two-background.webp": "875e75a22a6812edb8864528cf16421a",
"assets/assets/images/instagram-icon.webp": "b1a096ff77f64b3f6044a3288aea1489",
"assets/assets/images/lifetime-warrenty.webp": "cfb7fc35d037b2b0d8e2e337db2647c2",
"assets/assets/images/Logo-colored.png": "69aa4c45a311fd79ec2a717bac320d33",
"assets/assets/images/logo-white.png": "06528ea590b491d523eda3effbb4b148",
"assets/assets/images/map.PNG": "fc566a77d2e1ed61a293567a549ed801",
"assets/assets/images/mobile-else-bg.jpg": "ad7e5cacf45c76137ef5ac3ac3f504c0",
"assets/assets/images/product-example.png": "02d6e814fad9f29c3ce2b8e58716f301",
"assets/assets/images/products-page-bumber-image.jpg": "bc8df8a607c49e2abc831c719de571d0",
"assets/assets/images/products-page-screen-protector-image.png": "b4f6ab62792bddb05d44c7b23faa092c",
"assets/assets/images/products-page-skins-image.jpg": "a662b2c5b6d9b0a4924cb5387a901029",
"assets/assets/images/promise-section-background.webp": "87b80e89a336dce72fff1074b46ac667",
"assets/assets/images/shield.webp": "b14e5342767382159b91b623f5b517f1",
"assets/assets/images/support-page-banner.webp": "904cc09f7eedd7534c31089513fe4cd1",
"assets/assets/images/youtube-icon.webp": "81f489199b37595ccd4a471cb9de401e",
"assets/assets/instagram-icon.webp": "b1a096ff77f64b3f6044a3288aea1489",
"assets/assets/lifetime-warrenty.webp": "cfb7fc35d037b2b0d8e2e337db2647c2",
"assets/assets/Logo-colored.png": "69aa4c45a311fd79ec2a717bac320d33",
"assets/assets/logo-white.png": "06528ea590b491d523eda3effbb4b148",
"assets/assets/map.PNG": "fc566a77d2e1ed61a293567a549ed801",
"assets/assets/mobile-else-bg.jpg": "ad7e5cacf45c76137ef5ac3ac3f504c0",
"assets/assets/product-example.png": "02d6e814fad9f29c3ce2b8e58716f301",
"assets/assets/products-page-bumber-image.jpg": "bc8df8a607c49e2abc831c719de571d0",
"assets/assets/products-page-screen-protector-image.png": "b4f6ab62792bddb05d44c7b23faa092c",
"assets/assets/products-page-skins-image.jpg": "a662b2c5b6d9b0a4924cb5387a901029",
"assets/assets/promise-section-background.webp": "87b80e89a336dce72fff1074b46ac667",
"assets/assets/shield.webp": "b14e5342767382159b91b623f5b517f1",
"assets/assets/support-page-banner.webp": "904cc09f7eedd7534c31089513fe4cd1",
"assets/assets/youtube-icon.webp": "81f489199b37595ccd4a471cb9de401e",
"assets/FontManifest.json": "0450fd1f5c3dfe56edcb8697bc1e917b",
"assets/fonts/Anton/Anton-Regular.ttf": "7777f7f3f519eaedd41b8b9a8cd2666e",
"assets/fonts/Cairo/Cairo-Black.ttf": "2594318e02816dbea2837af4c5a6b0e1",
"assets/fonts/Cairo/Cairo-Bold.ttf": "80ada5fcee2d9415ee00ef7739eba6df",
"assets/fonts/Cairo/Cairo-ExtraLight.ttf": "b06831a64c4b3b2cdcf5bc0048acbada",
"assets/fonts/Cairo/Cairo-Light.ttf": "521aad886875e8c23944c69616960523",
"assets/fonts/Cairo/Cairo-Regular.ttf": "81b37df3b28d397659607391993eef22",
"assets/fonts/Cairo/Cairo-SemiBold.ttf": "df4b7a4fa0bbf338ddcf7abad1885344",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Quicksand/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/fonts/Quicksand/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/NOTICES": "bbe24bb3736a19d5e89b7624955b337e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "48e7a916127707077a55499891b2e294",
"/": "48e7a916127707077a55499891b2e294",
"main.dart.js": "6bb5c01a30a47ccff3c261579fb7b110",
"manifest.json": "2f161b26591862b4ed82eb2c20cafba9",
"version.json": "7c578254632a005a39acef3d81519b49"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

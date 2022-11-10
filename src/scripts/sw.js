import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/android-icon-36x36.png',
  './icons/android-icon-48x48.png',
  './icons/android-icon-72x72.png',
  './icons/android-icon-96x96.png',
  './icons/android-icon-144x144.png',
  './icons/android-icon-192x192.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

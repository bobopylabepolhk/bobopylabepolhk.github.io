"use strict";var precacheConfig=[["/peregovorki/index.html","4b117e0ac8983ff890787cd90b6fb98c"],["/peregovorki/static/css/main.25d15ab5.css","0f9775d5ac56203459a180f20396a1bc"],["/peregovorki/static/js/0.cc0fe20a.chunk.js","3fc56b4501dbe565a84dc411cf0a8325"],["/peregovorki/static/js/1.426765b5.chunk.js","08e584055b169d945a118ed4278051cb"],["/peregovorki/static/js/2.edace206.chunk.js","615ae096eb3b63f633c93bf70d3c5571"],["/peregovorki/static/js/3.6da4fd80.chunk.js","90d5324facfa0349595041b68841e2c8"],["/peregovorki/static/js/4.a64c5745.chunk.js","6e40d6fd93ffd6358448259ee9cffbad"],["/peregovorki/static/js/5.2fc455ec.chunk.js","ee10b6ce7d9fe20f7954e8da19bff7cd"],["/peregovorki/static/js/main.a79d7e10.js","23ccdc026379f4b233a35f3f0db0d8c2"],["/peregovorki/static/media/Arimo-Bold.26a0caab.woff","26a0caab182e455e437af04ce0159180"],["/peregovorki/static/media/Arimo.9f4146cb.woff","9f4146cb33028991668d2f4ec77a5fab"],["/peregovorki/static/media/TextBookBold.5379da4d.woff","5379da4d14cbe2bbee84a07fbb6ebc97"],["/peregovorki/static/media/TextbookNormal.6a7c32fd.woff","6a7c32fdbf4e8d716f3b922bfd576471"],["/peregovorki/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/peregovorki/static/media/logo.f7a50b39.png","f7a50b39d52d79c5a2628f5d30b08837"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,n),e=urlsToCacheKeys.has(r));var a="/peregovorki/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
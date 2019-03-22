"use strict";var precacheConfig=[["./cn.html","33d35d1c8a28f357fe8f6a3d7c081c09"],["./index.html","7bcbbdeeb7d6c8dbfc2cdd1c842b73d0"],["./static/css/cn.fb9dfd08.css","956b8f005795c2569d823cddbc15d24c"],["./static/css/index.fb9dfd08.css","414d16d757eb45e170251798229d649f"],["./static/js/0.e3965535.chunk.js","e4fc6004690821e1d40096697d96b97d"],["./static/js/1.c2f38371.chunk.js","8f2eb049de8e98d53979270834d56865"],["./static/js/10.1391c26b.chunk.js","a35ee0d4366392c76ba7d6be3e3bfb1a"],["./static/js/11.b280160e.chunk.js","cd94fa7a0f5158f592416e1679646b7d"],["./static/js/12.d0047431.chunk.js","e8025284f48d7f3e72e1d78f9710230c"],["./static/js/13.68d709fd.chunk.js","63f8e9359c30f7102ac34e31a84df147"],["./static/js/14.7bf0869f.chunk.js","3e9527525e028de4a089bd4d69b40608"],["./static/js/15.659d6674.chunk.js","f5ba5c031dacf1ab3e69ed6c4d1d3ece"],["./static/js/16.01976d1e.chunk.js","0afac8e1cb8dc5b2520ee49d6e6af036"],["./static/js/17.b7dc499e.chunk.js","4cd6b4eaf321b0897d3faf812e29689a"],["./static/js/18.b0ebd3fc.chunk.js","b2a96f2e5903d02a0d1c66f2c8f7adf5"],["./static/js/19.bb4b6010.chunk.js","e60fa948cbf1da0e57095582315380b6"],["./static/js/2.b49c7338.chunk.js","9ecf5daf817c166fa1f90d970840ed3e"],["./static/js/20.0cf55312.chunk.js","90871f4d2264ae0fde7eaee3c2b0e773"],["./static/js/3.df2dd208.chunk.js","8b65af8a9d3efbe5425ed6b87b92773c"],["./static/js/4.63b41871.chunk.js","d326332805b9f5d64874a2b6ec241a3e"],["./static/js/5.f5d7afbb.chunk.js","f12c6c5c71d87696007a8639248b8f20"],["./static/js/6.f2dce616.chunk.js","a0938d5c861afabc033e1ec8618c7977"],["./static/js/7.76f313f2.chunk.js","d94a3aee2202649ddaeea2170131f2c8"],["./static/js/8.6eb3e8e2.chunk.js","2e515cfff4a40ae9a2f89097d018e135"],["./static/js/9.abd21dd1.chunk.js","0b004ee689a545cd6c5f97fec4534946"],["./static/js/cn.95d85f8b.js","2aa000c91512e0c5cd5ffc51bf087c97"],["./static/js/index.de5d5370.js","13787215726efa33b286f63b72a53c11"],["./static/media/omi-logo2019.923166c3.svg","923166c362dce831a15c447b19a622f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,c,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return c.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,c,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,c=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,n),e=urlsToCacheKeys.has(c));var a="./index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(c=new URL(a,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
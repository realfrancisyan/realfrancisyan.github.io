"use strict";var precacheConfig=[["/404.html","2d7ff962eecfe00543d6ecc7b068716b"],["/a-simple-react-router-v4-tutorial.html","ee9666aa272bbfe16048fe879fd5f12b"],["/about/index.html","7901d1dfa2f13f70a8e8e88b5086eef7"],["/apple-touch-icon.png","5d189b047161fee5f4c8c9f9cbf5b829"],["/arrow-functions-vs-bind-this.html","19e4388ef81d07a97196fd24aaa69acb"],["/assets/svg/amsf.svg","f377674da2d68bfd2eca84c215a0cd6d"],["/assets/svg/heading-image-example.svg","97f9ed1a1221d5353362b35a991414f3"],["/assets/svg/logo.svg","05fcfe5bbfa2f7085a0e94c07ccf146b"],["/assets/themes/curtana/js/lightense.min.825a1899.js","825a1899ca931ba00489a383144e9022"],["/call-bind-apply.html","adb313a23a06ba11fc2049f21819c9c3"],["/charles-fake-data.html","2a491cb3a3c9de75201b2e48a20c825f"],["/charles-web-debugging-tool.html","c6bdc37dfc0eaac911847ac5283990c9"],["/closure.html","74fe0d55a6582bfcd6ebda0454404c86"],["/dynamic-input-width.html","357f9991886a14b2eb3a13916733e874"],["/es6-features.html","245b29b56024b6453dc60ae510708277"],["/express-sum-up.html","b6b38b02326307b4427003f349e6d2fb"],["/favicon.png","d14eecd167fa64c39ae4026c49f48528"],["/favicon.svg","821d4c60e5ae39e9042c879d5980640f"],["/favicon1.png","3d05f8132d73390b349cae0ce8c016d2"],["/git-clone-repository.html","d689dae88f563d6e42ba327d8a3c5461"],["/git-new-branch-from-branch.html","086b017ba14132b7f6555f4f4ff64a46"],["/git-tags.html","bd501ba99d417396728b733e5fece34d"],["/html5-css3-features.html","ede4054bb0808f3016f8e83205ac6384"],["/index.html","c65dd5e33b02534e9367f97c8d3b1f76"],["/install-mongodb-on-ubuntu.html","82aabe2b5bf60560ed9b60757b0b0d00"],["/jekyll-theme-compatibility.html","02ffb2d840916073449d4009992aade5"],["/json-server.html","13da735bece43eafdf63273102df61c3"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/manage-npm-sources.html","10e0b377962cb923081c3e687913c075"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/mongodb-basic-usage.html","4328db1c1050c4f9d3e43f7665171cee"],["/mpvue-summary.html","cfb93b1a62abb994e43c7e74f0d2e729"],["/multiple-themes-support.html","c5063142d342612e9877e8a076410076"],["/mvc-vs-mvvm.html","058dfb7fb07a56077043f2fad8beed6a"],["/news/index.html","75aa9347d63156153a90f9cca506f6c9"],["/node-js-sum-up.html","ddd73749e65ee1da59432a0eae10a939"],["/plans.html","3d613931751046d1d2e4ef5970d7294f"],["/presentational-vs-containers.html","e371cdef1f7a50ba06f8503fd4a12091"],["/promise.html","0054b02b1fdc4018304adaf41b4ac135"],["/react-lifecycle-hooks.html","e95195e1481eb36dbecf67893bbe572e"],["/reset-commit.html","83a70445f0e0e4d52f9a60b565a94901"],["/slot-offset-left-error.html","04fcd66576c1537314209e42872889fa"],["/the-prototype-and-inheritance.html","4f7d26eaf06ab83a4428a19854f84701"],["/typechecking-with-proptypes.html","0f835f1514a1882ff0775409695de000"],["/understanding-react-redux.html","a519ca8749d9353df2304dd26eaa5cfa"],["/understanding-redux.html","a3690dec21766ca87d2009879a3ecb23"],["/upgrading-from-v1-to-v2.html","0cbc95f972b75fed0fc6064e31fd1548"],["/upgrading-guide-v1.1.0.html","9ad9d09d6c47edbf54eb857ce0779f78"],["/vscode-high-cpu-usage.html","3c3e3d6d3fafb3ba6b307f3ab28d26be"],["/vue-lifecycle-hooks.html","f6b85a0a0c111f41473fd132d5167b68"],["/web-development-handbook-1.html","56f7079a7b740fab03ca800753886a53"],["/wechat-mini-program-bugs-cloud-functions.html","5ffb4152f4ad8967be756572b71b5477"],["/wechat-mini-program-bugs.html","89b336bfe29dc3cf3b6970f2c34b1925"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return fetch(e.request)}))}});
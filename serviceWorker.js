console.log('inside service worker')

const CACHE_KEY = `portfolio_cache_01`
const RESOURCES = [
    "/index.html",
    "/Shrey_Thakkar.pdf",
    "/assets/images/Shrey_Profile_01.jpg",
    "/assets/images/Shrey_Profile_02.jpg",
    "/assets/images/Shrey_Profile_03.jpg",
    "/assets/images/Shrey_Profile_04.jpg",
    "/assets/images/geo_designs_research_logo.jpg",
    "/assets/images/itechnosol_logo.jpg",
    "/assets/images/reyna_solutions_logo.jpg",
    "/assets/images/Ops_acuity.png",
    "/assets/images/react_kanbanify.png",
    "/assets/images/Wizer.png",
]
const addResourcesToCache = async (resources) => {
    const cache = await caches.open(CACHE_KEY)
    await cache.addAll(resources)
}

self.addEventListener("install", (event) => {
    event.waitUntil(addResourcesToCache(RESOURCES))
    self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url)
    const isSameOrigin = url.origin === self.location.origin
    const isStaticAssets = /\.(html|js|css|png|jpg|jpeg|svg)$/.test(url.pathname)

    if (event.request.method === 'GET' && isSameOrigin && isStaticAssets) {
        event.respondWith(cacheFirst(event.request, event))
    }
})

const cacheFirst = async (request, event) => {
    const responseFromCache = await caches.match(request)
    if (responseFromCache) return responseFromCache
    const responseFromNetwork = await fetch(request)
    event.waitUntil(putInCache(request, responseFromNetwork.clone()))
    return responseFromNetwork
}

const putInCache = async (request, response) => {
    const cache = await caches.open(CACHE_KEY)
    await cache.put(request, response)
}


self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_KEY).map(element => caches.delete(element))))
    )
})
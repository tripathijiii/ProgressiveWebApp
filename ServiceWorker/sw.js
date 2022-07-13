// Service Worker

self.addEventListener('install',(e) => {
    console.log('SW : Install Event');
    // self.skipWaiting(); to skip waiting to install js 
    let installPromise = new Promise((resolve)=>{
        setTimeout(resolve,3000);
    })
    // Tasks for the install event
    e.waitUntil(installPromise);
});

self.addEventListener('activate',(e) => {
    console.log('SW : Activate Event');
    let activePromise = new Promise((resolve)=>{
        setTimeout(resolve,2000);
    })
    // Tasks for the active event
    e.waitUntil(activePromise);
});

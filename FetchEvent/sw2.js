self.addEventListener('fetch',(e)=>{
    // if(e.request.url.endsWith('style.css')){
    //     console.log('LOLOL')
    // }

    //console.log('Fetch Event: ' + e.request.url);

    // if(e.request.url.endsWith('/greet')){
    //     let headers = new Headers({'Content-Type' : 'text/html'})
    //     let customResponse = new Response('<h1>Hello World</h1>',{headers});
    //     e.respondWith(customResponse);
    // }

    if(e.request.url.endsWith('/camera_feed.html')){
        e.respondWith(
            fetch(e.request).then((res)=>{
                if(res.ok) return res;

                return new Response('Camera Feed currently not available !!!');
            })
        )
    }


});
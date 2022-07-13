// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator){} one way of doing it 
if(navigator.serviceWorker){ // other way of doing it
    navigator.serviceWorker.register('/sw2.js').then(function(registration){
    }).catch(console.log);
}
fetch('camera_feed.html').then((res)=>{
    return res.text();
})
.then((html)=>{
    document.getElementById('camera').innerHTML = html;
});
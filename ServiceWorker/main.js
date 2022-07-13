// Progressive Enhancement (SW supported)
// if ('serviceWorker' in navigator){} one way of doing it 
if(navigator.serviceWorker){ // other way of doing it
    navigator.serviceWorker.register('/sw.js').then(function(registration){
        console.log("SW registered");
    }).catch(console.log);
}
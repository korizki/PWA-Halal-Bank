
navigator.serviceWorker.register('/sw.js');

if ('serviceWorker' in navigator){ 
  navigator.serviceWorker
  .register('/sw.js')
  .then(function(){
    console.log("Service Worker Registered")
  })
} else {
  console.log("error")
}
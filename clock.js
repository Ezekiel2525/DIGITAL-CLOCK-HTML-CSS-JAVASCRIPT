let hrx = document.getElementById('hrs');
let min = document.getElementById('min');
let secs = document.getElementById('secs');

setInterval(function(){
    let currentTime = new Date();
    hrx.innerHTML = (currentTime.getHours() < 10?'0': '') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10?'0': '') + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds() < 10?'0': '') + currentTime.getSeconds();;
}, 1000);
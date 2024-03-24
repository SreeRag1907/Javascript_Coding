const clock = document.getElementById("box");

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

} , 1000);


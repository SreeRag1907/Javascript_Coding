
const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'red'){
            body.style.backgroundColor = 'rgb(236, 98, 98)';
        }
        else if(e.target.id === "cyan"){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "green"){
            body.style.backgroundColor = 'lightgreen';
        }
        else if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === "orange"){
            body.style.backgroundColor = e.target.id;
        }
    });
})
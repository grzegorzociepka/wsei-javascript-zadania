document.addEventListener("DOMContentLoaded", function () {
    function increase(e){
       document.querySelector('.counter').innerHTML++;
    }

    const buttons = document.querySelectorAll('body button');

    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',increase,false);
    }
});

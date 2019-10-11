document.addEventListener("DOMContentLoaded", function () {
    function position(e){
        document.querySelector('#globalX').innerHTML = e.pageX;
        document.querySelector('#globalY').innerHTML = e.pageY;
        document.querySelector('#localX').innerHTML = e.pageX - this.offsetLeft;
        document.querySelector('#localY').innerHTML = e.pageY - this.offsetTop;
    }

    const box = document.querySelector('#box');

    box.addEventListener('mousemove',position,false);
});
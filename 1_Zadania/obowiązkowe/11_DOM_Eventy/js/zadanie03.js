document.addEventListener("DOMContentLoaded", function () {
    function increase(e){
        const id = e.target.getAttribute('id');
        const listOfSpans = Array.prototype.slice.call(document.querySelectorAll('.counter'));
        const span = listOfSpans.filter(x=> x.getAttribute('id') === id);
        span[0].innerHTML++;
    }
    const buttons = document.querySelectorAll('body button');
    const spans = document.querySelectorAll('.counter');
    for(let i=0;i<spans.length;i++){
        spans[i].setAttribute('id',i);
    }
    for(let i=0;i<buttons.length;i++){
        buttons[i].setAttribute('id',i);
        buttons[i].addEventListener('click',increase,false);
    }

});
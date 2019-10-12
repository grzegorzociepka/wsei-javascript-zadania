document.addEventListener("DOMContentLoaded", function () {

    function toggle(e){
       const closest = this.parentNode.querySelector(`.box[boxId="${e.target.getAttribute('id')}"]`);

       if(closest.style.display === 'none'){
            closest.style.display = 'block';
        }
        else{
            closest.style.display = 'none';
        }
    }
    const buttons = document.querySelectorAll('.button');
    const divs = document.querySelectorAll('.box');

    for(let i=0;i<buttons.length;i++){
        buttons[i].setAttribute('id',i);
        divs[i].setAttribute('boxId',i);
        buttons[i].addEventListener('click',toggle,false);
    }
    
});
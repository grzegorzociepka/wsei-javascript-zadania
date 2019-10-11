document.addEventListener("DOMContentLoaded", function () {
    function changeColor(e){
         this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
     }

     const divsList = document.querySelectorAll('.box');
     for(let item of divsList){
        item.addEventListener('click',changeColor,false);
     }
});
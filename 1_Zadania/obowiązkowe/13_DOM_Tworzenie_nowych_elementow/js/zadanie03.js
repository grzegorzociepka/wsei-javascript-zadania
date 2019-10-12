document.addEventListener("DOMContentLoaded", function () {
    function remove(e){
        this.parentNode.removeChild(this);

     }
     const buttons = document.querySelectorAll('#remove');

     for(let item of buttons){
         item.addEventListener('click',remove,false);
     }
});
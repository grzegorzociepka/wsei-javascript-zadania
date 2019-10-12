document.addEventListener("DOMContentLoaded", function () {
    function deleteOrder(e){
        this.parentNode.parentNode.outerHTML = '';
     }
     const buttons = document.querySelectorAll('.deleteBtn');

     for(let item of buttons){
         item.addEventListener('click',deleteOrder,false);
     }
});
document.addEventListener("DOMContentLoaded", function () {
    function remove(e){
        const list = document.querySelector('.list');
        var child = list.lastElementChild;  
        while (child) { 
            list.removeChild(child); 
            child = list.lastElementChild; 
        } 
     }
     const buttons = document.querySelectorAll('#remove');

     for(let item of buttons){
         item.addEventListener('click',remove,false);
     }
});
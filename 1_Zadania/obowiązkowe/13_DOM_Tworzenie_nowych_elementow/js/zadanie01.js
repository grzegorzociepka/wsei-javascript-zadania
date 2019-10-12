document.addEventListener("DOMContentLoaded", function () {
    function addData(e){
        const list = document.querySelector('.menu');
        let liItem = document.createElement('li');
        liItem.innerHTML = `<li>Element ${list.childElementCount + 1} - w chwili dodania było ${list.childElementCount} elementów</li>`;
        list.appendChild(liItem);
                
     }
     const buttons = document.querySelectorAll('.button');

     for(let item of buttons){
         item.addEventListener('click',addData,false);
     }
});
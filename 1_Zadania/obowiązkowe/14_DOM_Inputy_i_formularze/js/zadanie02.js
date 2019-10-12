document.addEventListener("DOMContentLoaded", function () {
function change(){

    const e = document.querySelector(".form-control");
    let value = e.options[e.selectedIndex].text;
    
    const imgs = document.querySelectorAll('.page-header img');
    if(value === 'Os X'){
        value = 'Apple';
    }

    for(let item of imgs){
        if(!(item.alt === value)){
            item.style.display = 'none';
        }
        else{
            item.style.display = 'block';
        }
    }
}
change();

document.querySelector('form button')
        .addEventListener('click',change,false);
});



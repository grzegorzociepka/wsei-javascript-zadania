document.addEventListener("DOMContentLoaded", function () {

    //0
    const list = document.querySelectorAll('.ex5 li');
    for(let i=0;i<list.length;i+=2){
        list[i].style.backgroundColor='green';
    }
    for(let i=0;i<list.length;i+=5){
        list[i].classList.add('big');
    }
    for(let i=0;i<list.length;i+=3){
        list[i].style.textDecoration='underline';
    }

    //1
    const browsers = document.querySelectorAll('.ex1 div div');

    for(let item of browsers){
        let name = item.className;
        item.style.backgroundImage = `url(assets/img/${name}.png)`;
        item.parentNode.querySelector('a').href = `www.${name}.pl`;
        item.parentNode.querySelector('a').innerText = name;
    } 
    document.querySelector('.chrome').style.width='100px';
    //style są tak dopisywane bo są dopisane jako inline do elementu

    //2
    const name = document.querySelector('.ex2 li #name');
    const fav_color = document.querySelector('.ex2 li #fav_color');
    const fav_meal = document.querySelector('.ex2 li #fav_meal');

    name.innerHTML = 'Grzegorz Ociepka';
    fav_color.innerHTML = 'Czarny';
    fav_meal.innerHTML = 'Sushi';

    //3
    const ul = document.querySelector('.ex3 ul');
    ul.classList.add('menu');
    const listOfLi = document.querySelectorAll('.ex3 li');

    for(let item of listOfLi){
        if(!item.classList.contains('menuElement')){
            item.classList.add('menuElement');
        }
        if(item.classList.contains('error')){
            item.classList.remove('error');
        }
    }

    //4
    const listEx4 = document.querySelectorAll('.ex4 li');
    for(let [index, value] of listEx4.entries()){
        value.setAttribute("data-id", index + 1);
    } 
});
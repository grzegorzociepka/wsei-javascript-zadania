document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    //0
    const title = document.getElementsByClassName('title')[0];
    function getDataAnimation(element){
        let data = title.getAttribute("data-animation");
        return data;
    }
    getDataAnimation(title);

    //1
    const home1 = document.getElementById('home');
    const home2 = document.querySelector('#header');
    const liWithDataDirection = document.findElementByAttribute('data-direction');
    const block = document.querySelector('.block');
    
    //2
    const allLiInNav = document.querySelectorAll('nav li');
    console.log(allLiInNav.length);
    const paragraphs = document.querySelectorAll('div p');
    console.log(paragraphs.length);
    const divs = document.querySelectorAll('article div');
    console.log(divs.length);

    //3
    const article = document.querySelector('.first');
    console.log(document.querySelectorAll('.first div').length);
});

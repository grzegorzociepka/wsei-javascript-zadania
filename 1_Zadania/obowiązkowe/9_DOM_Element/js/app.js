document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

   //0
   function getDatasInfo(elements){
       const data = [];
       for(let i=0;i<elements.length;i++){
            data.push(elements[i].getAttribute('data-color'));
       }
       return data;
   }

   //1
   console.log(homeElement);

   for(let item of childElements) console.log(item);

   console.log(banner);

   for(let item of blocks) console.log(item);

   for(let item of links) console.log(item);

   //2
   for(let item of blocks){

    console.log(item.innerHTML);
    console.log(item.outerHTML);
   }

   //inner html zwraca tylko zawartość wewnątrz danego diva
   //outer html zwraca zawartość razem z tym divem
   blocks.innerHtml = 'Nowa wartość diva o klasie blocks';

   //3
   const footer = document.querySelector('#mainFooter');
   function getId(element){
        return element.id;
   }

   //4
   function  getTags(elements){
       const tagsNames = [];
       for(let item of elements){
            tagsNames.push(item.tagName);
       }
       return tagsNames;
   }

   //5
   function getClassInfo(element){
       const classes = [];
       for(let item of element.classList){
            classes.push(item);
       }
   }

   //6
   const liElements = document.querySelectorAll('nav li');
   function setDataDirection(elements){
       for(let item of elements){
           if(!item.getAttribute('data-direction')){
                item.setAttribute('data-direction','top');
           }
       }
   }

});

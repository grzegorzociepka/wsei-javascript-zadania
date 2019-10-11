document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");
    
    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});


//1
//w konsoli błąd Uncaught TypeError: Cannot read property 'classList' of null
//dzieje się tak dlatego ze strona jest ładowana po kolei, z góry do dołu
//więc w momencie wykonywania skryptu nie istnieje #menu

//2
//Po dodaniu DOMContentLoaded wszystko działa poprawnie, skrypt został wykonany
//dopiero po załadowaniu elementów DOM na stronie.

//3
//Nie ma róznicy
document.addEventListener("DOMContentLoaded", function () {
    function showMessage(e){
        console.log('Hura! Działa!');
    }
    document.querySelector('#mainBtn')
        .addEventListener('click',showMessage,false);
});
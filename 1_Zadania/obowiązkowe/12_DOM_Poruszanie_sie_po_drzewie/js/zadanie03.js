document.addEventListener("DOMContentLoaded", function () {
    function changeColors(e) {
        const list = this.querySelectorAll('li');
        for (let item of list) {
            item.style.backgroundColor = 'green';
        }
        list[0].style.backgroundColor = 'red';
        list[list.length - 1].style.backgroundColor = 'blue';
    }
    const divs = document.querySelectorAll('.listContainer');
    for (let item of divs) {
        item.addEventListener('mouseover', changeColors, false);
    }
});
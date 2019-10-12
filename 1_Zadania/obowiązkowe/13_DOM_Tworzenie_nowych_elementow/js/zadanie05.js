document.addEventListener("DOMContentLoaded", function () {
    function move(e) {
        const listId = e.target.parentNode.parentNode.id;
        if (listId === 'list1') {
            const newList = document.querySelector('#list2');
            newList.appendChild(e.target.parentNode);
        }
        else {
            const newList = document.querySelector('#list1');
            newList.appendChild(e.target.parentNode);
        }

    }
    const buttons = document.querySelectorAll('.moveBtn');

    for (let item of buttons) {
        item.addEventListener('click', move, false);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    //1
    const firstChild = document.querySelector('.first').childNodes[0];
    const thirdChild = document.querySelector('.first').childNodes[2];

    //2
    const parentOfSecond = document.querySelector('#second').parentNode.childNodes[3];
    //3
    let attribute = document.querySelector('*[data-ex=third]')
                            .parentNode
                            .parentNode
                            .lastChild
                            .firstChild
                            .childNodes;
    attribute = attribute[parseInt(attribute.length / 2)];
    //4
    const forth = document.querySelector('.forth')
                .parentNode
                .querySelector('article')
                .querySelectorAll('p')[1];

});
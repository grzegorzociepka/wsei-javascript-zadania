//2.1
const menuContainer = document.querySelector('#menu');
const getDataInfo = (element) => [...element.querySelectorAll('li')].map(li => li.getAttribute('data-info'));
//2.2
const mainContainer = document.querySelector('#main-contener');
const getElementClass = (element) => [...element.classList];
//2.3
const pinkColorElement = document.querySelector('.pink-color');
const getElementText = (element) => element.textContent;
//2.4
const imageElement = document.querySelectorAll('.images');
const getElementAlt = (element) => [...element].map(el => el.getAttribute('alt'));
//2.5
const linkElement = document.querySelectorAll('.my-link');
const getElementHref = (element) => [...element].map(el => el.getAttribute('href'));
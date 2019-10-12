const [firstLink, secondLink] = document.querySelectorAll('a');
firstLink.addEventListener('click', (e) => {
    e.currentTarget.nextElementSibling.style.display = 'block';
});
secondLink.addEventListener('mouseover', (e) => {
    e.currentTarget.nextElementSibling.style.display = 'block';
});
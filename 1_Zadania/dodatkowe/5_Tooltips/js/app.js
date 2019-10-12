document.addEventListener('DOMContentLoaded', () => {
    const newElement = document.createElement('span');
    newElement.classList.add('tooltipText');
    newElement.innerText = 'Text tooltipa';
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseover', (e) => {
            console.log(e.currentTarget.getAttribute('data-text'));
            e.currentTarget.appendChild(newElement);
        });
        tooltip.addEventListener('mouseout', (e) => {
            console.log(e.currentTarget.getAttribute('data-text'));
            e.currentTarget.removeChild(newElement);
        });
    })
});
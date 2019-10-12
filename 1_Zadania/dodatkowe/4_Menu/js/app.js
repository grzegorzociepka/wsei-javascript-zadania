document.addEventListener('DOMContentLoaded', () => {
    const outerList = document.querySelectorAll('.nav>ul>li');
    outerList.forEach(li => {
        li.addEventListener('mouseover', (e) => {
            const innerList = e.currentTarget.querySelector('ul');
            if (innerList) {
                innerList.style.display = 'block';
            }
        });
        li.addEventListener('mouseout', (e) => {
            const innerList = e.currentTarget.querySelector('ul');
            if (innerList) {
                innerList.style.display = 'none';
            }
        });
    })
});
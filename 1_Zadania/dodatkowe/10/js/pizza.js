const checkboxes = document.querySelectorAll('input[data-price]');
const firstCheckboxInForm = document.querySelector('form .checkbox:first-child input');
const lastCheckboxInForm = document.querySelector('form .checkbox:nth-last-of-type(1) input');
const addonsText = document.querySelector('#price');

checkboxes.forEach(checkbox => checkbox.addEventListener('click', (e) => {
    e.currentTarget.checked = checkbox.checked;
    updatePrice();
}));

firstCheckboxInForm.addEventListener('click', (e) => {
    if (!e.currentTarget.checked) {
        e.currentTarget.checked = true;
    }
    lastCheckboxInForm.checked = false;
    checkboxes.forEach(checkbox => checkbox.checked = true);
    updatePrice();
});

lastCheckboxInForm.addEventListener('click', (e) => {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    firstCheckboxInForm.checked = false;
    lastCheckboxInForm.checked = false;
    updatePrice();
});

const updatePrice = () => {
    addonsText.textContent = [...checkboxes].reduce((prev, acc) => {
        if (acc.checked) {
            return prev + parseFloat(acc.getAttribute('data-price'));
        }
        return prev;
    }, 0) + 'zł';
};
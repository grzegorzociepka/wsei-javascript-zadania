
function validateForm() {

    //1
    const email = document.forms['TaskForm']['email'].value;
    if (!email.includes('@')) {
        addError('Email musi posiadać znak @');
        return false;
    }

    //2
    const name = document.forms['TaskForm']['name'].value;
    if (name.length < 6) {
        addError('Twoje imię jest za krótkie');
        return false;
    }

    //3
    const surname = document.forms['TaskForm']['surname'].value;
    if (surname.length < 6) {
        addError('Twoje nazwisko jest za krótkie');
        return false;
    }

    //4
    const pass1 = document.forms['TaskForm']['pass1'].value;
    const pass2 = document.forms['TaskForm']['pass2'].value;

    if (!(pass1 === pass2) || (pass1.length === 0) || (pass2.length === 0)) {
        addError('Hasła nie są takie same lub puste');
        return false;
    }

    //5
    const checkbox = document.forms['TaskForm']['agree'].checked;
    console.log(checkbox);
    if (!checkbox) {
        addError('Musisz zaakceptować warunki');
        return false;
    }
    return true;
}

function addError(error) {
    const errorContainer = document.querySelector('.error-message');
    let newError = document.createElement('p');
    newError.innerHTML = error;
    errorContainer.appendChild(newError);
}
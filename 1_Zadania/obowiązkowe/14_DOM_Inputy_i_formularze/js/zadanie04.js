function validate(value){
    const type = document.querySelector('#type');

    if(value[0] === '4'){
        type.innerHTML = 'Visa';
        if(value.length > 12 && value.length < 17){
            document.querySelector('form #name').style.borderColor = 'green';
        }
        else{
            document.querySelector('form #name').style.borderColor = 'red';
        }
    }
    else if(value[0] === '5'){
        type.innerHTML = 'Mastercard';
        if(value.length === 16){
            document.querySelector('form #name').style.borderColor = 'green';
        }
        else{
            document.querySelector('form #name').style.borderColor = 'red';
        }
    }
    else if(value[0] === '3' && (value[1] === '4' || value[1] === '7')){
        type.innerHTML = 'American Express';
        if(value.length === 15){
            document.querySelector('form #name').style.borderColor = 'green';
        }
        else{
            document.querySelector('form #name').style.borderColor = 'red';
        }
    }
    else{
        type.innerHTML = '';
    }
}
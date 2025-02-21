import '../css/style.css'
import GeneratePassword from './modules/GeneratePassword'

const form = document.querySelector('.form');

const passwordDisplay = document.querySelector('.password-display');
const validationDisplay = document.querySelector('.validation-display');

const numberOfChar = form.querySelector('.number-of-char');
const number = form.querySelector('#n-id');
const upperCase = form.querySelector('#up-id');
const lowerCase = form.querySelector('#lc-id');
const especialChar = form.querySelector('#ec-id');

function clearDisplay() {
    validationDisplay.innerHTML = '';
    passwordDisplay.innerHTML = '';
}

function onDisplay(element, value) {
    element.innerText = value;
}

form.addEventListener('submit', event => {
    event.preventDefault();

    clearDisplay();

    let password;

    if(!number.checked && !upperCase.checked && !lowerCase.checked && !especialChar.checked) onDisplay(validationDisplay, 'Selecione uma ou mais opções');

    if(!numberOfChar.value) {
        onDisplay(validationDisplay, 'Selecione a quantidade de caracteres');
        numberOfChar.focus()
    }

    if(numberOfChar.value < 0) onDisplay(validationDisplay, 'Digite uma quantidade de caracteres positiva')

    if(number.checked) {
        password = GeneratePassword.addNumber(numberOfChar.value);

        onDisplay(passwordDisplay, password);
    }

    if(upperCase.checked) {
        password = GeneratePassword.addUpperCase(password, numberOfChar.value); 
        
        onDisplay(passwordDisplay, password);
    }

    if(lowerCase.checked) {
        password = GeneratePassword.addLowerCase(password, numberOfChar.value);

        onDisplay(passwordDisplay, password);
    }

    if(especialChar.checked) {
        password = GeneratePassword.addEspecialChar(password, numberOfChar.value);

        onDisplay(passwordDisplay, password);
    }
});
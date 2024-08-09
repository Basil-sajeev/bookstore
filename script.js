
const nameEl = document.querySelector('#name');
const emailEl=document.querySelector('#email');
const form = document.querySelector('#signup');

// Function to validate the name input
const checkname = () => {

    let valid = false;

    const min = 2,
        max = 25;

// Get the trimmed value of the name input
    const username = nameEl.value.trim();

    if (!isRequired(username)) {
        showError(nameEl, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(nameEl, `name must be between ${min} and ${max} characters.`)
    } else {

         // If valid, show success and set valid to true
        showSuccess(nameEl);
        valid = true;
    }
    return valid;
};

// Function to validate the email input
const checkEmail = () => {
    let valid = false;
    // Get the trimmed value of the email input
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')

// If valid, show success and set valid to true
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
}

// Function to check if the email follows a valid pattern

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


// Function to check if a value is not empty
const isRequired = value => value === '' ? false : true;

// Function to check if a value's length is within a specified range
const isBetween = (length, min, max) => length < min || length > max ? false : true



const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};





const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}



form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

let isnameValid = checkname(),
isEmailValid=checkEmail();

let isFormValid=isnameValid &&isEmailValid

if(isFormValid){
    submitForm()
    
    

}

});



const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkname();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));





function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.getElementsByClassName('box');

    for (let i = 0; i < products.length; i++) {
        const productName = products[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(input)) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}   


function toggleSubmitButton() {
    const checkbox = document.getElementById('agreeCheckbox');
    const submitButton = document.getElementById('submitButton');

    submitButton.disabled = !checkbox.checked;
}

function submitForm() {
    alert('Submitted Successfully');
    window.location.href = 'terms.html';
}
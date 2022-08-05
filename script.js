const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    
    const usernameValue = username.value.trim(); 
    const emailValue = email.value.trim(); 
    const passwordValue = password.value.trim(); 
    const password2Value = password2.value.trim();
    
    if (usernameValue === '') {
        setErrorFor(username,'Username cannot be blank'); // Show error  // Add error class
    } else {
        setSuccessFor(username);  // Add success class
    }

    if (emailValue === '') {
        setErrorFor(email,'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email,'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password,'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2,'Password2 cannot be blank');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2,'Passwords do not match');
    } else {
        setSuccessFor(password2);
    }

    if (passwordValue.length > 10) {
        setErrorFor(password,'Password length is too long')
    }
    
}

function setErrorFor(input, message) {

    const formControl = input.parentElement; // .form_control
    const small = formControl.querySelector('small');

    // Add error message inside the small tag
    small.innerText = message;

    // Add error class
    formControl.className = 'form_control error';
}

function setSuccessFor(input) {

    const formControl = input.parentElement;
    formControl.className = 'form_control success';

}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
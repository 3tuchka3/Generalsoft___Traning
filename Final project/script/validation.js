const button = document.querySelector('#button');


function validateEmail(email) {
    let pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
}

function validatePassword(pass) {
    let pattern = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    return pattern.test(pass);
}

function validateUserName(name) {
    let pattern = /(?=.*[a-z])[0-9a-zA-Z!@#$%^&*]{3,}/g;
    return pattern.test(name);
}

button.addEventListener('click', helper.distribution);
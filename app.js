// password inputs
let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password_confirm");
// toggle buttons
let passwordShow = document.querySelector("#passwordShow");
let confirmPasswordShow = document.querySelector("#confirmPasswordShow");
//confirm password input error message
let confirmPasswordError = passwordConfirm.nextElementSibling;

// toggles the password input type between password and text
function passwordToggle(e) {
    let passwordInput = e.target.nextElementSibling;
    passwordInput.type = passwordInput.type === 'password' ? 'text':'password';
    e.target.textContent = e.target.textContent === 'Show' ? 'Hide':'Show';
}

function checkPasswordValidity() {
    console.log("here?")
    if(passwordConfirm.value === "") {
        passwordConfirm.setCustomValidity("Invalid");
        confirmPasswordError.textContent = "Passwords Must Match.";
    } else if(password.value === passwordConfirm.value && password.checkValidity()) {
        console.log("custom validity?")
        passwordConfirm.setCustomValidity("");
    } else if(password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Invalid");
        confirmPasswordError.textContent = "Password must follow requirements.";
    } else {
        passwordConfirm.setCustomValidity("Invalid")
        confirmPasswordError.textContent = "Passwords Must Match.";
    }    
}


// events listeners
passwordShow.addEventListener('click', (e) => {
    passwordToggle(e);
})
confirmPasswordShow.addEventListener('click', (e) => {
    passwordToggle(e);
})

// checks validity of confirm password field
passwordConfirm.addEventListener('keyup', checkPasswordValidity);
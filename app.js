let inputs = document.querySelectorAll("input");
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

// sets the validity of the confirm password field
function checkPasswordValidity() {
    console.log("here?")
    if(passwordConfirm.value === "") {
        passwordConfirm.setCustomValidity("Passwords Must Match.");
        confirmPasswordError.textContent = "Passwords Must Match.";
    } else if(password.value === passwordConfirm.value && password.checkValidity()) {
        console.log("custom validity?")
        passwordConfirm.setCustomValidity("");
    } else if(password.value === passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Password must follow requirements.");
        confirmPasswordError.textContent = "Password must follow requirements.";
    } else {
        passwordConfirm.setCustomValidity("Passwords Must Match.")
        confirmPasswordError.textContent = "Passwords Must Match.";
    }    
}

// checks the validity of general input fields and toggles error class
function checkInputValidity(e) {
    let input = e;
    if(input.checkValidity()) {
        input.classList.remove("error");
    } else {
        input.classList.add("error");
    }
    // if the input being checked is the password field, then it concurrently updates confirm password as well
    if(e === inputs[4]) {
        checkInputValidity(passwordConfirm);
    }
}
    

// events listeners
passwordShow.addEventListener('click', (e) => {
    passwordToggle(e);
})
confirmPasswordShow.addEventListener('click', (e) => {
    passwordToggle(e);
})

passwordConfirm.addEventListener('keyup', checkPasswordValidity);
password.addEventListener('keyup', checkPasswordValidity);  

for(let input of inputs) {
    input.addEventListener('keyup', (e) => {
        checkInputValidity(e.target);
    })
}
for(let input of inputs) {
    input.addEventListener('click', (e) => {
        checkInputValidity(e.target);
    })
}
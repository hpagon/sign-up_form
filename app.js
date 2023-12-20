let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#password_confirm");
let passwordShow = document.querySelector("#passwordShow");
let confirmPasswordShow = document.querySelector("#confirmPasswordShow");

console.log(password);
console.log(passwordConfirm);
console.log(passwordShow);
console.log(confirmPasswordShow);

passwordShow.addEventListener("click", (e) => {
    password.type = password.type === 'password' ? 'text':'password';
    e.target.textContent = e.target.textContent === 'Show' ? 'Hide':'Show';
})
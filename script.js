const title = document.getElementById('title');
const nameField = document.getElementById('nameField');
const signinBtn = document.getElementById('signinBtn');
const signupBtn = document.getElementById('signupBtn');
const forgetPassword = document.getElementById('fp');

signupBtn.onclick = function(){
    title.innerHTML = "Sign Up";
    nameField.style.display = "block";
    forgetPassword.style.display = "none";
}
signinBtn.onclick = function(){
    title.innerHTML = "Login";
    nameField.style.display = "none";
}


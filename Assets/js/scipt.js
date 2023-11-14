var loginForm = document.getElementById('login-form');
function toggleLoginForm() {
     loginForm.style.display = 'block' //? 'none' : 'block';
}

loginForm.addEventListener("click",toggleLoginForm)
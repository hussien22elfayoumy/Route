const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const validateMessage = document.querySelector('#validateMessage');
const loginBtn = document.querySelector('#loginBtn');

console.log(JSON.parse(localStorage.getItem('usersList')));

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkUser();
});

function foundedUser() {
  const local = JSON.parse(localStorage.getItem('usersList'));
  if (local) {
    const foundedUser = local.filter(
      (user) =>
        user.userEmail === userEmail.value &&
        user.userPassword === userPassword.value
    );

    return foundedUser;
  }
}

function emptyInputs() {
  userEmail.value = null;
  userPassword.value = null;
}

function checkUser() {
  const user = foundedUser();
  if (user.length > 0) {
    emptyInputs();
    navigateToHome();

    localStorage.setItem('loggedInUser', JSON.stringify(user));

    validateMessage.innerHTML = 'Sucess';

    loginBtn.classList.add('disabled');
    loginBtn.innerHTML = 'Logging In ...';

    if (validateMessage.classList.contains('text-danger'))
      validateMessage.classList.replace('text-danger', 'text-success');
    else validateMessage.classList.add('text-success');
  } else {
    validateMessage.classList.add('text-danger');

    if (userEmail.value || userPassword.value)
      validateMessage.innerHTML = 'incorrect email or password';
    else validateMessage.innerHTML = 'All inputs is required';
  }
}

function navigateToHome() {
  setTimeout(() => (window.location.href = 'pages/home.html'), 1000);
}

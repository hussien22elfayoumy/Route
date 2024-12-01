const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const validateMessage = document.querySelector('#validateMessage');
const loginBtn = document.querySelector('#loginBtn');

// TODO: Remove logged user if the user go back from home page
localStorage?.removeItem('loggedInUser');

// TODO: Check if the user founded or not
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

// TODO: Empty inputs filds
function emptyInputs() {
  userEmail.value = null;
  userPassword.value = null;
}

// TODO: Validate and process to login to the home
function logIn() {
  const user = foundedUser();
  if (user.length > 0) {
    emptyInputs();
    navigateToHome();

    // TODO: Add the founded user to local storage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    loginBtn.classList.add('disabled');
    loginBtn.innerHTML = 'Logging In ...';

    validateMessage.innerHTML = 'Sucess';

    if (validateMessage.classList.contains('text-danger'))
      validateMessage.classList.replace('text-danger', 'text-success');
    else validateMessage.classList.add('text-success');
  } else {
    validateMessage.classList.add('text-danger');

    if (userEmail.value && userPassword.value)
      validateMessage.innerHTML = 'incorrect email or password';
    else validateMessage.innerHTML = 'All inputs is required';
  }
}

// TODO: navigate to home if user founded
function navigateToHome() {
  setTimeout(() => (window.location.href = 'pages/home.html'), 1000);
}

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  logIn();
});

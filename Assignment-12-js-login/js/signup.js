const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');

const validateMessage = document.querySelector('#validateMessage');

const signUpBtn = document.querySelector('#signUpBtn');

// TODO: Add the new user to the local storage or if it first time make one
const usersList = JSON.parse(localStorage.getItem('usersList')) || [];

// TODO: Add new user to the users list
function addUserToList() {
  const user = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };
  usersList.push(user);
  localStorage.setItem('usersList', JSON.stringify(usersList));
}

// TODO: empty inputs
function emptyInputs() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}

// TODO: Check if email is already in users list;
function checkUserEmail() {
  const local = JSON.parse(localStorage.getItem('usersList'));
  if (local) {
    for (let i = 0; i < local.length; i++) {
      if (local[i].userEmail === userEmail.value) {
        return true;
      }
    }
    return false;
  }
}

// TODO: Signing the user up
function signUp() {
  addUserToList();
  emptyInputs();

  validateMessage.innerHTML = 'Sucess';
  if (validateMessage.classList.contains('text-danger'))
    validateMessage.classList.replace('text-danger', 'text-success');
  else validateMessage.classList.add('text-success');

  setTimeout(() => {
    window.location.href = '../index.html';
  }, 1000);
}

// TODO: handel user signup and validation
signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (userName.value && userEmail.value && userPassword.value) {
    if (checkUserEmail()) {
      validateMessage.classList.add('text-danger');
      validateMessage.innerHTML = 'email already exists';
      userEmail.value = null;
    } else {
      signUp();

      signUpBtn.classList.add('disabled');
      signUpBtn.innerHTML = 'Signing you up ...';
    }
  } else {
    validateMessage.classList.add('text-danger');
    validateMessage.innerHTML = 'All inputs is required';
  }
});

// TODO: Remove logged user if the user go back from home page
localStorage?.removeItem('loggedInUser');

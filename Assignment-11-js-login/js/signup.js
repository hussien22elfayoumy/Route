const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');

const validateMessage = document.querySelector('#validateMessage');

const signUpBtn = document.querySelector('#signUpBtn');

const usersList = JSON.parse(localStorage.getItem('usersList')) || [];

function addUserToList() {
  const user = {
    userName: userName.value,
    userEmail: userEmail.value,
    userPassword: userPassword.value,
  };
  usersList.push(user);
  localStorage.setItem('usersList', JSON.stringify(usersList));
}

function emptyInputs() {
  userName.value = null;
  userEmail.value = null;
  userPassword.value = null;
}

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

signUpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkUserEmail()) {
    validateMessage.classList.add('text-danger');
    validateMessage.innerHTML = 'email already exists';
    userEmail.value = null;
  } else {
    addUserToList();
    emptyInputs();

    if (validateMessage.classList.contains('text-danger')) {
      validateMessage.classList.replace('text-danger', 'text-success');
      validateMessage.innerHTML = 'Sucess';
    } else {
      validateMessage.classList.add('text-success');
      validateMessage.innerHTML = 'Sucess';
    }

    setTimeout(() => {
      window.location.href = '../index.html';
    }, 2000);
  }
});

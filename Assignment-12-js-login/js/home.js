const welcomeUser = document.querySelector('#welcomeUser');
const logOutBtn = document.querySelector('#logOutBtn');

// TODO: Retrive the logged in user from the local storage
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

// TODO: Protect the Home Route only access to logged in users
if (loggedInUser) {
  welcomeUser.innerHTML = `Welcome, ${loggedInUser[0].userName}`;
} else {
  window.location.href = '../index.html';
}

// TODO: Handel logout
logOutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInUser');
  logOutBtn.classList.add('disabled');
  logOutBtn.innerHTML = 'Logging Out...';

  setTimeout(() => {
    window.location.href = '../index.html';
  }, 500);
});

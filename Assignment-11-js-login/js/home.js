const welcomeUser = document.querySelector('#welcomeUser');

const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
  welcomeUser.innerHTML = `Welcome, ${loggedInUser[0].userName}`;
} else {
  window.location.href = '../index.html';
}

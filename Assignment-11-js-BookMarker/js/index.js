const siteName = document.querySelector('#siteName');
const siteURL = document.querySelector('#siteURL');
const submitBtn = document.querySelector('#submitBtn');
const bookmarksContainer = document.querySelector('#bookmarksContainer');
const allInputs = document.querySelectorAll('.form-control');

let bookmarkList = [];

if (localStorage.getItem('bookmarks') !== null) {
  bookmarkList = JSON.parse(localStorage.getItem('bookmarks'));
  renderAllBookmarks();
}

function addBookmarkToList() {
  let newSiteUrl = '';
  if (!siteURL.value.startsWith('https://www.')) {
    newSiteUrl = 'https://www.' + siteURL.value;
  }
  if (siteURL.value.startsWith('www.')) {
    newSiteUrl = 'https://' + siteURL.value;
  }
  if (siteURL.value.startsWith('https://www.')) {
    newSiteUrl += siteURL.value;
  }

  const bookmarks = {
    siteName: siteName.value,
    siteURL: newSiteUrl,
  };

  bookmarkList.push(bookmarks);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
}

function removeBookmarkFromList(id) {
  bookmarkList.splice(id, 1);
  bookmarksContainer.innerHTML = '';
  localStorage.setItem('bookmarks', JSON.stringify(bookmarkList));
  renderAllBookmarks();
}

function emptyFormInputs() {
  siteName.value = null;
  siteURL.value = null;

  siteName.classList.remove('is-valid');
  siteURL.classList.remove('is-valid');
}

function renderNewBookmark() {
  bookmarksContainer.innerHTML += `
		<tr>
				<th scope="row">${bookmarkList.length}</th>
				<td>${bookmarkList.at(-1).siteName}</td>
				<td>
					<a id="visitLink" target="_blank" href="${bookmarkList.at(-1).siteURL}">
					<button id="visitBtn" class="btn visit-btn">
					<i class="fa-solid fa-eye"></i>
						Visit
						</button>
					</a>
				</td>
				<td>
					<button value="${
            bookmarkList.length - 1
          }" id="deleteBtn" class="btn delete-btn">
						<i class="fa-solid fa-trash-can"></i> Delete
					</button>
				</td>
			</tr>
	
	`;

  initDeleteBtn();
}

function renderAllBookmarks() {
  for (let i = 0; i < bookmarkList.length; i++) {
    bookmarksContainer.innerHTML += `
		<tr>
				<th scope="row">${i + 1}</th>
				<td>${bookmarkList.at(i).siteName}</td>
				<td>
					<a id="visitLink" target="_blank" href="${bookmarkList.at(i).siteURL}">
						<button id="visitBtn" class="btn visit-btn">
						<i class="fa-solid fa-eye"></i>
						Visit
						</button>
					</a>
				</td>
				<td>
					<button value="${i}" id="deleteBtn" class="btn delete-btn">
						<i class="fa-solid fa-trash-can"></i> Delete
					</button>
				</td>
			</tr>
	
	`;
  }

  initDeleteBtn();
}

function initDeleteBtn() {
  const deleteBtns = document.querySelectorAll('#deleteBtn');

  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', () => {
      const bookmarkId = deleteBtns[i].getAttribute('value');
      removeBookmarkFromList(bookmarkId);
    });
  }
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (validateInput(siteName) && validateInput(siteURL)) {
    addBookmarkToList();

    renderNewBookmark();

    emptyFormInputs();
  } else {
    // if (!validateInput(siteName)) siteName.classList.add('is-invalid');
    // if (!validateInput(siteURL)) siteURL.classList.add('is-invalid');
  }
});

function validateInput(inputName) {
  const value = inputName.value;
  const id = inputName.id;
  const regex = {
    siteName: /^[a-zA-Z0-9]{2,}$/,
    siteURL: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
  };

  if (regex[id].test(value)) {
    inputName.classList.replace('is-invalid', 'is-valid');
  } else {
    inputName.classList.add('is-invalid');
  }

  return regex[id].test(value);
}

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].addEventListener('keyup', () => {
    validateInput(allInputs[i]);
  });
}

const productName = document.querySelector('#product-name');
const productPrice = document.querySelector('#product-price');
const productCategory = document.querySelector('#product-category');
const productImg = document.querySelector('#product-image');
const productDescription = document.querySelector('#product-description');

const addProductBtn = document.querySelector('#add-product');
const updateFormBtn = document.querySelector('#update-product-form');

const productContainer = document.querySelector('#product-container');

let allProducts = [];

let updatedProductId = 0;

if (localStorage.length !== 0) {
  allProducts = JSON.parse(localStorage.getItem('allProducts'));
  displayAllProducts(allProducts);
}

function addProductToList() {
  const product = {
    productName: productName.value,
    productPrice: productPrice.value,
    productCategory: productCategory.value,
    productImg: productImg.files[0]?.name,
    productDescription: productDescription.value,
  };
  allProducts.push(product);
  localStorage.setItem('allProducts', JSON.stringify(allProducts));
}

function clearInputs() {
  productName.value = null;
  productPrice.value = null;
  productCategory.value = null;
  productImg.value = null;
  productDescription.value = null;
}

function displayLastProduct() {
  productContainer.innerHTML += `
			<div class="col-lg-3 col-sm-6">
				<div class="card p-2 pb-3">
					<img class="w-100 d-block" src="imgs/${allProducts.at(-1).productImg}" alt="" />
					<span class="mt-2 fw-semibold">product [${allProducts.length}]</span>
					<h2 class="mb-0 fs-5">Name: ${allProducts.at(-1).productName}</h2>
					<p class="m-0"><span class="fw-semibold">price:</span> ${
            allProducts.at(-1).productPrice
          }</p>
					<p class="mb-1"><span class="fw-semibold">Category:</span> ${
            allProducts.at(-1).productCategory
          }</p>
					<p class="mb-3"><span class="fw-semibold">Description:</span> ${
            allProducts.at(-1).productDescription
          }</p>
					<div class="d-flex align-items-center justify-content-center gap-2">
						<button value="${
              allProducts.length - 1
            }" id="update-card" class="btn btn-warning btn-sm">
							Update
						</button>
						<button value="${
              allProducts.length - 1
            }" id="delete-product" class="btn btn-danger btn-sm">
							Delete
						</button>
					</div>
				</div>
			</div>
	`;
  initUpdateBtns();
  initDeleteBtns();
}

function displayAllProducts(arr) {
  let container = '';
  for (let i = 0; i < arr.length; i++) {
    container += `
		<div class="col-lg-3 col-sm-6">
			<div class="card p-2 pb-3">
				<img class="w-100 d-block" src="imgs/${arr[i].productImg}" alt="" />
				<span class="mt-2 fw-semibold">product [${i + 1}]</span>
				<h2 class="mb-0 fs-5">Name: ${arr[i].productName}</h2>
				<p class="m-0"><span class="fw-semibold">price:</span> ${
          arr[i].productPrice
        }</p>
				<p class="mb-1"><span class="fw-semibold">Category:</span> ${
          arr[i].productCategory
        }</p>
				<p class="mb-3"><span class="fw-semibold">Description:</span> ${
          arr[i].productDescription
        }</p>
				<div class="d-flex align-items-center justify-content-center gap-2">
					<button value="${i}" id="update-card" class="btn btn-warning btn-sm">
						Update
					</button>
					<button value="${i}" id="delete-product" class="btn btn-danger btn-sm">
						Delete
					</button>
				</div>
			</div>
		</div>
`;
  }
  productContainer.innerHTML = container;
  initUpdateBtns();
  initDeleteBtns();
}

function initDeleteBtns() {
  const deleteProductBtns = document.querySelectorAll('#delete-product');

  for (let i = 0; i < deleteProductBtns.length; i++) {
    const productId = deleteProductBtns[i].value;
    deleteProductBtns[i].addEventListener('click', () => {
      deleteProduct(productId);
    });
  }
}

function initUpdateBtns() {
  const updateCardBtns = document.querySelectorAll('#update-card');

  for (let i = 0; i < updateCardBtns.length; i++) {
    const productId = updateCardBtns[i].value;
    updateCardBtns[i].addEventListener('click', () => {
      updateFormInputs(updateCardBtns[i].value);
    });
  }
}

function resetProductList() {
  localStorage.setItem('allProducts', JSON.stringify(allProducts));
  productContainer.innerHTML = '';
  displayAllProducts(allProducts);
}

function deleteProduct(id) {
  allProducts.splice(id, 1);
  resetProductList();
}

function updateFormInputs(id) {
  addProductBtn.classList.add('d-none');
  updateFormBtn.classList.remove('d-none');
  updatedProductId = id;

  const myFile = new File([''], `${allProducts[id].productImg}`, {
    type: 'image/*',
  });
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(myFile);
  productImg.files = dataTransfer.files;

  productName.value = allProducts[id].productName;
  productPrice.value = allProducts[id].productPrice;
  productCategory.value = allProducts[id].productCategory;
  productDescription.value = allProducts[id].productDescription;
}

function updateProductCard(id) {
  const product = {
    productName: productName.value,
    productPrice: productPrice.value,
    productCategory: productCategory.value,
    productImg: productImg.files[0]?.name,
    productDescription: productDescription.value,
  };

  allProducts.splice(id, 1, product);
}

addProductBtn.addEventListener('click', () => {
  addProductToList();
  clearInputs();
  displayLastProduct();
});

updateFormBtn.addEventListener('click', () => {
  addProductBtn.classList.remove('d-none');
  updateFormBtn.classList.add('d-none');
  updateProductCard(updatedProductId);
  clearInputs();
  resetProductList();
});

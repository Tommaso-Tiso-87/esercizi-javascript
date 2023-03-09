const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const cancelProduct = document.getElementById("cancel-product");
const comeBack = document.getElementById("comingBack");
const body = document.getElementById("body");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
comeBack.addEventListener("click", closeModal);
cancelProduct.addEventListener("click", productErased);

function openModal(event) {
  event.preventDefault();
  const modal = document.getElementById("modal");
  modal.classList.remove("hidden");
}

function closeModal(event) {
  event.preventDefault();
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
}

function messaging() {
  const message = document.createElement("h2");
  const text = document.createTextNode("The product has been erased correctly");
  message.appendChild(text);
  body.appendChild(message);
}
function productErased(event) {
  event.preventDefault();
  const modal = document.getElementById("modal");
  modal.classList.add("hidden");
  messaging();
}

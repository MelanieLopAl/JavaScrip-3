import { Observer } from "./modules/Observer.js";
import { Product } from "./modules/classPd.js"
import { getJoke } from "./modules/ramdon.js";

getJoke();

  const whiteBtn = document.getElementById("white-color");
  const blackBtn = document.getElementById("black-color");
  const productPhone = document.getElementById("phone-case");
  const productPoster = document.getElementById("poster");
  const productShirt = document.getElementById("t-shirt");
  const productPillow = document.getElementById("pillow");
  const productVz = document.querySelector("#product-visualization img");
  
  
  const productPrices = {
    "t-shirt": {  black: 13 ,white: 10 },
    poster: { black: 5 , white: 3  },
    "phone-case": {  black: 7, white: 5 },
    pillow: {black: 15 , white: 12 },
  };
  
  let currentProduct = "t-shirt";
  let currentColor = "black";
  let currentJoke = "";
  
  
  const productVisualization = document.getElementById("product-visualization");
  const productTitle = document.getElementById("product-title");
  const productPrice = document.getElementById("product-price");
  const selectedJoke = document.getElementById("selected-joke");
  
  function updateProductVisualization() {
    const imageUrl = `./img/${currentProduct}-${currentColor}.jpg`;
    productVisualization.src = imageUrl;
  }
  

  function updateTitle() {
    const productTitleText = `${capitalizeFirstLetter(currentProduct)} ${currentColor === "white" ? "Blanco" : "Negro"}`;
    productTitle.textContent = productTitleText;
    updatePrice();
  }
  
  function updatePrice() {
    const productPriceText = `$${productPrices[currentProduct][currentColor]}`;
    productPrice.textContent = productPriceText;
  }
  
  function updateJoke() {
    selectedJoke.textContent = `NewJoke: ${currentJoke}`;
  }
  
  const observer = new Observer();
  
  observer.subscribe(updateProductVisualization);
  observer.subscribe(updateTitle);
  observer.subscribe(updatePrice);
  observer.subscribe(updateJoke);
  

  whiteBtn.addEventListener("click", function () {
    currentColor = "white";
    observer.notify();
  });
  
  blackBtn.addEventListener("click", function () {
    currentColor = "black";
    observer.notify();
  });
  
  function changeImage(product, color) {
    const imageUrl = `../img/product-${product}-${color}.jpg`;
    productVisualization.querySelector("img").src = imageUrl;
  }
  
  productPhone.addEventListener("click", function () {
    let product = "case";
    let color =  currentColor;
    currentProduct = "phone-case";
    changeImage(product, color);
    observer.notify();
  });
  
  productPoster.addEventListener("click", function () {
    let product = "poster";
    let color =  currentColor;
    currentProduct = "poster";
    changeImage(product, color)
    observer.notify();
  });
  
  productShirt.addEventListener("click", function () {
    let product = "shirt";
    let color =  currentColor;
    currentProduct = "t-shirt"
    changeImage(product, color)
    observer.notify();
  });
  
  productPillow.addEventListener("click", function () {
    let product = "pillow";
    let color =  currentColor;
    currentProduct = "pillow";
    changeImage(product, color)
    observer.notify();
  });
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  updateProductVisualization();
  updateTitle();
  updatePrice();



const addToCartButton = document.getElementById("add-to-cart-btn");
addToCartButton.addEventListener("click", function () {
const product = new Product(
  currentProduct,
  currentColor === "white" ? "Blanco" : "Negro",
  productPrices[currentProduct][currentColor],
  currentJoke
);

const cartProducts = document.getElementById("cart-products");
const productMarkup = product.createMarkup();
cartProducts.appendChild(productMarkup);
});

function removeProduct(event) {
const productElement = event.target.closest(".cart-product");
productElement.remove();
}

const cartProducts = document.getElementById("cart-products");
cartProducts.addEventListener("click", function (event) {
if (event.target.classList.contains("remove-button")) {
  removeProduct(event);
}
});

const removeAllButton = document.getElementById("remove-all-btn");
removeAllButton.addEventListener("click", function () {
cartProducts.innerHTML = "";
});

const cartOpenButton = document.getElementById("cart-open-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartCloseButton = document.getElementById("cart-close-btn");

function openCart() {
cartOverlay.classList.add("open");
}

function closeCart() {
cartOverlay.classList.remove("open");
}

cartOpenButton.addEventListener("click", openCart);

cartCloseButton.addEventListener("click", closeCart);
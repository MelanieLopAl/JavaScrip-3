import { Observer } from "./Observer.js";
import { Product } from "./classPd.js"

  const whiteBtn = document.getElementById("white-color");
  const blackBtn = document.getElementById("black-color");
  const productPhone = document.getElementById("phone-case");
  const productPoster = document.getElementById("poster");
  const productShirt = document.getElementById("t-shirt");
  const productPillow = document.getElementById("pillow");
  const productVz = document.querySelector("#product-visualization img");
  
  
  // Precio de los productos
  const productPrices = {
    "t-shirt": {  black: 13 ,white: 10 },
    poster: { black: 5 , white: 3  },
    "phone-case": {  black: 7, white: 5 },
    pillow: {black: 15 , white: 12 },
  };
  
  // Producto seleccionado
  let currentProduct = "t-shirt";
  let currentColor = "black";
  let currentJoke = "";
  
  
  // Elementos de la página
  const productVisualization = document.getElementById("product-visualization");
  const productTitle = document.getElementById("product-title");
  const productPrice = document.getElementById("product-price");
  const selectedJoke = document.getElementById("selected-joke");
  
  // Actualizar la visualización del producto
  function updateProductVisualization() {
    const imageUrl = `./img/${currentProduct}-${currentColor}.jpg`;
    productVisualization.src = imageUrl;
  }
  
  // Actualizar el título del producto
  // Actualizar el título del producto
  function updateTitle() {
    const productTitleText = `${capitalizeFirstLetter(currentProduct)} ${currentColor === "white" ? "Blanco" : "Negro"}`;
    productTitle.textContent = productTitleText;
    updatePrice();
  }
  
  // Actualizar el precio del producto
  function updatePrice() {
    const productPriceText = `$${productPrices[currentProduct][currentColor]}`;
    productPrice.textContent = productPriceText;
  }
  
  // Actualizar el chiste seleccionado
  function updateJoke() {
    selectedJoke.textContent = `NewJoke: ${currentJoke}`;
  }
  
  // Suscripciones a los observadores
  const observer = new Observer();
  
  observer.subscribe(updateProductVisualization);
  observer.subscribe(updateTitle);
  observer.subscribe(updatePrice);
  observer.subscribe(updateJoke);
  
  // Evento de clic para el botón de color blanco
  whiteBtn.addEventListener("click", function () {
    currentColor = "white";
    observer.notify();
  });
  
  // Evento de clic para el botón de color negro
  blackBtn.addEventListener("click", function () {
    currentColor = "black";
    observer.notify();
  });
  
  // Función para cambiar la imagen
  function changeImage(product, color) {
    const imageUrl = `../img/product-${product}-${color}.jpg`;
    productVisualization.querySelector("img").src = imageUrl;
  }
  
  // Eventos de clic para los productos
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
  
  // Función auxiliar para capitalizar la primera letra de una cadena
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Inicialización de la página
  updateProductVisualization();
  updateTitle();
  updatePrice();



//PARTE TRES. BOTONES

export default class Product {
  constructor(title, color, price, joke) {
    this.title = title;
    this.color = color;
    this.price = price;
    this.joke = joke;
  }

  createMarkup() {
    const productMarkup = document.createElement("div");
    productMarkup.classList.add("cart-product");

    const titleElement = document.createElement("h3");
    titleElement.textContent = `${this.title} - ${this.color}`;
    productMarkup.appendChild(titleElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = `Price: $${this.price}`;
    productMarkup.appendChild(priceElement);

    const jokeElement = document.createElement("p");
    jokeElement.textContent = `Joke: ${this.joke}`;
    jokeElement.id = "product-joke";
    productMarkup.appendChild(jokeElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    productMarkup.appendChild(removeButton);

    return productMarkup;
  }
}
 //agregar producto 
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

// remover producto
function removeProduct(event) {
const productElement = event.target.closest(".cart-product");
productElement.remove();
}

// evento remover
const cartProducts = document.getElementById("cart-products");
cartProducts.addEventListener("click", function (event) {
if (event.target.classList.contains("remove-button")) {
  removeProduct(event);
}
});

// evento remove all 
const removeAllButton = document.getElementById("remove-all-btn");
removeAllButton.addEventListener("click", function () {
cartProducts.innerHTML = "";
});

const cartOpenButton = document.getElementById("cart-open-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartCloseButton = document.getElementById("cart-close-btn");

// abrir carrito
function openCart() {
cartOverlay.classList.add("open");
}

//cerrar el carrito
function closeCart() {
cartOverlay.classList.remove("open");
}

// evento abrir carrito
cartOpenButton.addEventListener("click", openCart);

// evento cerrar carrito
cartCloseButton.addEventListener("click", closeCart);
class Observer {
    constructor() {
      this.subscribers = [];
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    unsubscribe(callback) {
      this.subscribers = this.subscribers.filter(subscriber => subscriber !== callback);
    }
  
    notify() {
      this.subscribers.forEach(subscriber => subscriber());
    }
  }
  
const jokeBtn = document.getElementById("random-joke-button");
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
function updateTitle() {
  const productTitleText = `${capitalizeFirstLetter(currentProduct)} ${
  currentColor === "white" ? "Blanco" : "Negro"}`;
  productTitle.textContent = productTitleText;
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

// Evento de clic para obtener un chiste aleatorio
jokeBtn.addEventListener("click", async function () {
  const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" },
  });
  const jokeData = await jokeResponse.json();
  currentJoke = jokeData.joke;
  observer.notify();
  updateJoke();
});

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

// Eventos de clic para los productos
productPhone.addEventListener("click", function () {
  currentProduct = "phone-case";
  observer.notify();
});

productPoster.addEventListener("click", function () {
  currentProduct = "poster";
  observer.notify();
});

productShirt.addEventListener("click", function () {
  currentProduct = "t-shirt";
  observer.notify();
});

productPillow.addEventListener("click", function () {
  currentProduct = "pillow";
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

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
const btnRamdon = document.querySelector('#botonrd');
const textRmd = document.querySelector('#dad-jokerd');
const url = 'https://icanhazdadjoke.com/';

//Linkeada el API para tener los chistes
function  getJoke() {
    fetch( url, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(jokes => {
        textRmd.textContent =jokes.joke;
      })
      .catch(error => console.error(error));
     
}
//Evento para que al tocar el boton
//se de un chiste ramdon 
btnRamdon.addEventListener('click', getJoke );

//exportar la pag a el main
export {getJoke};
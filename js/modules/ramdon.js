
const btnRamdon = document.querySelector('#botonrd');
const textRmd = document.querySelector('#dad-jokerd');
const url = 'https://icanhazdadjoke.com/';
textRmd.style.display = 'none';

// Linkea el API para obtener los chistes
function getJoke() {
  fetch(url,  {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(jokes => {
      textRmd.textContent = jokes.joke;
    })
    .catch(error => console.error(error));
}

// Evento para chsite aleatorio
btnRamdon.addEventListener('click', function() {
  textRmd.style.display = 'block';
  getJoke();
});

async function getJokeById(id) {

  return fetch(`${apiUrl}j/${id}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .catch((error) => {
      logErrors();
    });
}

// Exporta la función getJoke
export { getJoke, getJokeById };

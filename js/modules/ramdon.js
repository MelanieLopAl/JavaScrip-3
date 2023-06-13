
const btnRamdon = document.querySelector('#botonrd');
const textRmd = document.querySelector('#dad-jokerd');
const url = 'https://icanhazdadjoke.com/';
textRmd.style.display = 'none';

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

export { getJoke, getJokeById };

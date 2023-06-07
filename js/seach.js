const searchIpt = document.querySelector('#div-search');
const jokeResults = document.querySelector('#results-joke');

//funcion para que en el input 
//se pueda buscar una palabra al azar y de un chsite
function searchJokes(keyword) {
  fetch(`https://icanhazdadjoke.com/search?term=${keyword}`, {
    headers: {
      Accept: 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.results.length > 0) {
        const jokes = data.results.map(result => `<li id="getJokeById" ><a href="product.html"></a></li>`).join('');
        jokeResults.innerHTML = jokes;
      } else {
        jokeResults.innerHTML = '<li> No jokes found </li>';
      }
    })
    .catch(error => console.error(error));

    //evento para que al dar click en el boton busque el chiste
    searchIpt.addEventListener('submit', event => {
    event.preventDefault();
    const keyword = searchIpt.elements['ramdon-wrd'].value;
    searchJokes(keyword).innerHTML;
    }); 

}

//exportar la pag al main js
export {searchJokes};
const searchIpt = document.querySelector('#div-search');
const jokeResults = document.querySelector('#results-joke');

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

    searchIpt.addEventListener('submit', event => {
    event.preventDefault();
    const keyword = searchIpt.elements['ramdon-wrd'].value;
    searchJokes(keyword).innerHTML;
    }); 

}

export {searchJokes};
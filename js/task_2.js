const h1 = document.createElement('h1');
const card = document.createElement('section');
h1.innerHTML = 'The Rick and Morty API';
h1.className = 'title'
card.id = 'card-container' 


$.ajax({
    url: 'https://rickandmortyapi.com/api/character',
    method: 'GET',
    success: function(data, status) {
        console.log(data);
        console.log(status);
        makeCards(data.results);
    },
    error: function(response, status) {
        console.log(status);
    }
});


function makeCards(characterArray) {
    $('.container').append(card)
    const cardContainer = document.querySelector('#card-container')    
    $('div').before(h1)
    characterArray.forEach(character => {
        cardContainer.innerHTML = cardContainer.innerHTML + 
        `<div class='character-card title ${character.id}'
        <h2><b>${character.name}</b></h2>
        <br>
        <a href='http://localhost:5500/character.html?id=${character.id}'>
        <img src=${character.image}></img>
        </a>
        </div`
    });
}






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
    const cardContainer = document.querySelector('#card-container')
    characterArray.forEach(character => {
        cardContainer.innerHTML = cardContainer.innerHTML + 
        `<div id='character-card-${character.id}'
        <h2><b>${character.name}</b></h2>
        <br>
        <a href='http://localhost:5500/character.html?id=${character.id}'>
        <img src=${character.image}></img>
        </a>
        </div`
    });
}






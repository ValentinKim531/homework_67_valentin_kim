let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
const image = document.createElement('img')
const h1 = document.createElement('h1');    
const h2 = document.createElement('h2');    
const ul = document.createElement('ul');
const ul2 = document.createElement('ul');
ul.className = 'description'

$.ajax({
    url: `https://rickandmortyapi.com/api/character/${param}`,
    method: 'GET',
    success: function(data, status) {
        console.log(data);
        console.log(status);
        addInfo(data)
    },
    error: function(response, status) {
        console.log(status);
    }
});


function addInfo(character) {
    $('.container').append(image)
    image.src=character.image
    $(image).before(h1);
    $(h1).append(`Character: ${character.name}`);
    $('.container').append(ul)
    
    $('.description').append(`<li><b>Name:</b> ${character.name}</li>`);
    $('.description').append(`<li><b>Created:</b> ${character.created}</li>`);
    $('.description').append(`<li><b>Gender:</b> ${character.gender}</li>`);
    $('.description').append(`<li><b>Id:</b> ${character.id}</li>`);
    $('.description').append(`<li><b>Location name:</b> ${character.location.name}</li>`);
    $('.description').append(`<li><b>Location url:</b> ${character.location.url}</li>`);
    $('.description').append(`<li><b>Origin name:</b> ${character.origin.name}</li>`);
    $('.description').append(`<li><b>Species:</b> ${character.species}</li>`);
    $('.description').append(`<li><b>Status:</b> ${character.status}</li>`);
    $('.description').append(`<li><b>Type:</b> ${character.type}</li>`);
    $('.description').append(`<li><b>Url:</b> ${character.url}</li>`);
    
    
    updateEpisodes(character.episode)
};


const updateEpisodes = (episodes) => {
    $('.container').append(ul2)
    h2.innerHTML = 'Episodes:'
    $(ul2).before(h2);
    for (let episode of episodes) {
        let episode_str = `<li>${episode}`;
        $(ul2).append(episode_str)
        }
    }

    


let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
const image = document.querySelector('img')
const h1 = document.createElement('h1');    
const h2 = document.createElement('h2');    
const ul = document.createElement('ul');
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
    $(image).before(h1)
    $(h1).append(`Character: ${character.name}`)
    image.src=character.image
    h2.innerHTML = 'Episodes:'
    $('#episode').before(h2);
    
    $(ul).append(`<li><b>Name:</b> ${character.name}</li>`);
    $(ul).append(`<li><b>Created:</b> ${character.created}</li>`);
    $(ul).append(`<li><b>Gender:</b> ${character.gender}</li>`);
    $(ul).append(`<li><b>Id:</b> ${character.id}</li>`);
    $(ul).append(`<li><b>Location name:</b> ${character.location.name}</li>`);
    $(ul).append(`<li><b>Location url:</b> ${character.location.url}</li>`);
    $(ul).append(`<li><b>Origin:</b> ${character.origin}</li>`);
    $(ul).append(`<li><b>Species:</b> ${character.species}</li>`);
    $(ul).append(`<li><b>Status:</b> ${character.status}</li>`);
    $(ul).append(`<li><b>Type:</b> ${character.type}</li>`);
    $(ul).append(`<li><b>Url:</b> ${character.url}</li>`);

    $('h2').before(ul);
    
    updateEpisodes(character.episode)
};


const updateEpisodes = (episodes) => {
    for (let episode of episodes) {
        let episode_str = `<li>${episode}`;
        $('#episode').append(episode_str)
        }
    }

    


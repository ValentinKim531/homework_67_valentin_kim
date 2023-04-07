let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');


const image = document.querySelector('img')


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
    $('h1').append(character.name)
    const h2 = document.createElement('h2');    
    h2.innerHTML = 'Episodes:'
    $('#episode').before(h2);
    
    image.src=character.image
    console.log(character.name)

    updateEpisodes(character.episode)
};


const updateEpisodes = (episodes) => {
    for (let episode of episodes) {
        let episode_str = `<li>${episode}`;
        $('#episode').append(episode_str)
        }
    }

    


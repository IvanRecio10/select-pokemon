const infoContainer = document.querySelector(".info-container")
const select = document.getElementById("get-pokemon")

select.addEventListener('click', () => {
    var pokemon = document.getElementById("pokemon-select").value
    console.log(pokemon)
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon).then((response) => {
        if(!response.ok){
            throw new Error("Fallo en su peticion")
        }
        return response.json();
    })
    .then((data) => {
    console.log(data)
        infoContainer.innerHTML = ""
        var html = ""
        html += "<div class='info-container'>"
        html += "<img src='" + data.sprites.other.dream_world.front_default + "'>"
        html += "<h1>" + data.name + "</h1>"
        for(var hability of data.abilities){
            html += "<p>" + hability.ability.name + "</p>"
        }
        html += "<p>Height : " + data.height + "</p>"
        html += "<p>Weight : " + data.weight + "</p>"
        
        infoContainer.innerHTML = html
          
    })
})
/*
  POKEAPI - Documentació bàsica

  API base:
  https://pokeapi.co/api/v2/

  Endpoints utilitzats:

  1) GET /pokemon?limit=20
     Retorna una llista de Pokémon amb:
     - name
     - url (endpoint del detall)

  2) GET /pokemon/{name}
     Retorna el detall d’un Pokémon:
     - id
     - name
     - height
     - weight
     - types
*/

const llista = document.getElementById("llista");
const detall = document.getElementById("detall");
const filtre = document.getElementById("filtre");

let pokemons = [];

// Carregar llista inicial (20 Pokémon)
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then(res => res.json())
  .then(data => {
    pokemons = data.results;
    mostrarLlista(pokemons);
  });

// Mostrar llista de Pokémon
const mostrarLlista = dades => {
  llista.innerHTML = "";

  dades.forEach(pokemon => {
    const li = document.createElement("li");
    li.textContent = pokemon.name;

    li.addEventListener("click", () => {
      carregarDetall(pokemon.name);
    });

    llista.appendChild(li);
  });
};

// Carregar detall d’un Pokémon
const carregarDetall = nom => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`)
    .then(res => res.json())
    .then(pokemon => {
      detall.innerHTML = "";

      const nomEl = document.createElement("h3");
      nomEl.textContent = pokemon.name;

      const id = document.createElement("p");
      id.textContent = "ID: " + pokemon.id;

      const altura = document.createElement("p");
      altura.textContent = "Altura: " + pokemon.height;

      const pes = document.createElement("p");
      pes.textContent = "Pes: " + pokemon.weight;

      const tipus = document.createElement("p");
      tipus.textContent = "Tipus: " +
        pokemon.types.map(t => t.type.name).join(", ");

      detall.appendChild(nomEl);
      detall.appendChild(id);
      detall.appendChild(altura);
      detall.appendChild(pes);
      detall.appendChild(tipus);
    });
};

// Filtrar Pokémon pel nom
filtre.addEventListener("input", e => {
  const text = e.target.value.toLowerCase();
  const filtrats = pokemons.filter(p =>
    p.name.includes(text)
  );
  mostrarLlista(filtrats);
});
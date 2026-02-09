const noms = ["Anna", "Jordi", "Laia", "Pau", "Lune"];
const contenidor = document.getElementById("contenidor");
const ul = document.createElement("ul");
noms.forEach(nom => {
    const li = document.createElement("li");
    li.innerText = nom;
    ul.appendChild(li);
});
contenidor.appendChild(ul);
const productes = [
    { nom: "Ordinador", preu: 850 },
    { nom: "Teclat", preu: 40 },
    { nom: "Ratolí", preu: 25 }
];
const contenidor = document.getElementById("contenidor");

// 1. Crea un `<table>` amb `<thead>` i `<tbody>`.
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");
table.appendChild(thead);
table.appendChild(tbody);

// 2. Al `<thead>`, afegeix una fila amb dues columnes: **Nom** i **Preu (€)**.
const trh = document.createElement("tr");
const th1 = document.createElement("th");
th1.innerText = "Nom";
const th2 = document.createElement("th");
th2.innerText = "Preu(€)";
trh.appendChild(th1);
trh.appendChild(th2);
thead.appendChild(trh);

// 3. Per a cada producte, crea una fila `<tr>` amb `<td>` corresponents i insereix-la al `<tbody>`.
productes.forEach(producte => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = producte.nom;
    const td2 = document.createElement("td");
    td2.innerText = producte.preu;
    tr.appendChild(td1)
    tr.appendChild(td2);
    tbody.appendChild(tr);
});

// 4. Afegeix la taula al `#contenidor`.
contenidor.appendChild(table);
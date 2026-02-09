const BASE_URL = 'https://jsonplaceholder.typicode.com';
const divInfo = document.getElementById('info');

const btnPatch = document.getElementById('btnPatch');

btnPatch.addEventListener('click', (e) => {
    e.preventDefault()
    actualitzarPost(postId.value, 'PATCH');
});
const btnPut = document.getElementById('btnPut');
btnPut.addEventListener('click', (e) => {
    e.preventDefault()
    actualitzarPost(postId.value, 'PUT');
});
async function obtenirPost(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    return await response.json();
}

function mostrarPost(titol, post) {
    const bloc = document.createElement('div');
    bloc.innerHTML = `
        <h4>${titol}</h4>
        <p><strong>Títol:</strong> ${post.title}</p>
        <p><strong>Cos:</strong> ${post.body}</p>
        <hr>
    `;
    divInfo.appendChild(bloc);
}

async function actualitzarPost(id, metode) {
    divInfo.innerHTML = '';


    const abans = await obtenirPost(id);
    mostrarPost('Original', abans);

    const dades =
        metode === 'PATCH'
            ? { title: title.value }
            : {
                title: title.value,
                body: body.value,
                userId: abans.userId
            };

    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: metode,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dades)
    });

    const despres = await response.json();


    mostrarPost('Actualitzat', despres);
}

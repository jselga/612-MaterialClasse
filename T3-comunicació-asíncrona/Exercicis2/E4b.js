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

async function fetchJSON(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }

    return await response.json();
}

async function obtenirPost(id) {
    return await fetchJSON(`${BASE_URL}/posts/${id}`);
}


function mostrarPost(titol, post) {
    const bloc = document.createElement('div');

    const h4 = document.createElement('h4');
    h4.textContent = titol;

    const pTitle = document.createElement('p');
    pTitle.append(
        'Títol: ',
        Object.assign(document.createElement('strong'), {
            textContent: post.title
        })
    );

    const pBody = document.createElement('p');
    pBody.append(
        'Cos: ',
        Object.assign(document.createElement('strong'), {
            textContent: post.body
        })
    );

    const hr = document.createElement('hr');

    bloc.append(h4, pTitle, pBody, hr);
    divInfo.appendChild(bloc);
}

async function actualitzarPost(id, metode) {
    divInfo.replaceChildren(); 

    try {
        // ABANS
        const original = await obtenirPost(id);
        mostrarPost('Original', original);

        //DADES A ENVIAR
        const dades =
            metode === 'PATCH'
                ? { title: title.value }
                : {
                    title: title.value,
                    body: body.value,
                    userId: original.userId
                };

        // ACTUALITZACIÓ
        const updated = await fetchJSON(
            `${BASE_URL}/posts/${id}`,
            {
                method: metode,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dades)
            }
        );

        // DESPRÉS
        mostrarPost('Actualitzat', updated);

    } catch (error) {
        mostrarError(error.message);
    }
}
function mostrarError(missatge) {
    const p = document.createElement('p');
    p.textContent = `${missatge}`;
    p.style.color = 'red';
    divInfo.appendChild(p);
}

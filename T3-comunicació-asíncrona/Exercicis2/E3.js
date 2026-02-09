const BASE_URL = 'https://jsonplaceholder.typicode.com';
const form = document.getElementById('postForm');
const divInfo = document.getElementById('info');


form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {


        const data = {
            title: title.value,
            body: body.value,
            userId: 1
        };

        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log('Creat:', result);
        crearPost(result);
    } catch (error) {
        console.error('Error en crear post', error.message);

    }
});

function crearPost(post) {
    const postEnviat = document.createElement('p');
    const text1 = document.createTextNode('Post amb títol ');
    const bold = document.createElement('b');
    bold.textContent = post.title;
    const text2 = document.createTextNode(' enviat correctament');

    postEnviat.append(text1, bold, text2);
    divInfo.appendChild(postEnviat);

}

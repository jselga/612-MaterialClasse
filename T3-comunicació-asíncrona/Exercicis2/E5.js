const BASE_URL = 'https://jsonplaceholder.typicode.com';
const postsDiv = document.getElementById('posts');
async function carregarPosts() {
    const response = await fetch(`${BASE_URL}/posts`);
    const posts = await response.json();

    posts.slice(0, 10).forEach(post => {
        const article = document.createElement('article');
        article.textContent = post.title;

        const btn = document.createElement('button');
        btn.textContent = 'Eliminar';

        btn.addEventListener('click', async () => {
            try {
                await eliminarPost(post.id);   // asincronia clara
                eliminarDelDOM(article);       // DOM sincronitzat
            } catch (error) {
                console.error(error);
                alert('No s’ha pogut eliminar el post');
            }
        });

        article.appendChild(btn);
        postsDiv.appendChild(article);
    });
}

carregarPosts();


async function eliminarPost(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error eliminant el post');
    }
}

function eliminarDelDOM(element) {
    element.remove();
}

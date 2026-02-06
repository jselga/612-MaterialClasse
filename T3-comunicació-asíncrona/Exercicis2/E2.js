const BASE_URL = 'https://jsonplaceholder.typicode.com';
const detailDiv = document.getElementById('detail');
const postsDiv = document.getElementById('posts');


async function carregarPosts() {
    const response = await fetch(`${BASE_URL}/posts`);
    const posts = await response.json();

    posts.slice(0, 5).forEach(post => {
        const article = document.createElement('article');
        crearPost(post)
    });
}

carregarPosts();

function crearPost(post) {
    const article = document.createElement('article');
    const title = document.createElement('h3')
    title.textContent = post.title;
    const btn = document.createElement('button');
    btn.textContent = 'Detall';
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = post.title;

  

    btn.addEventListener('click', () => {
        mostrarDetall(post.id);
    });
  link.addEventListener('click', (e) => {
        e.preventDefault();
        mostrarDetall(post.id);
    });
    // article.appendChild(title);
    // article.appendChild(btn);
    article.appendChild(link);
    postsDiv.appendChild(article);
}



async function mostrarDetall(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const post = await response.json();

    detailDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
  `;
}


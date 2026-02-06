const BASE_URL = 'https://jsonplaceholder.typicode.com';
const postsDiv = document.getElementById('posts');

async function carregarPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  const posts = await response.json();

  posts.slice(0, 10).forEach(post => {
    const article = document.createElement('article');
    article.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    `;
    postsDiv.appendChild(article);
  });
}

carregarPosts();

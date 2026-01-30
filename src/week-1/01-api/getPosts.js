// const getPosts = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error(`Błąd HTTP! Status: ${response.status}`);
  }

  const posts = await response.json();
  console.log(posts);
};

getPosts();

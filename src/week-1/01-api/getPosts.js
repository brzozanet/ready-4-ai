// const getPosts = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = response.json();
  console.log(posts);
};

getPosts();

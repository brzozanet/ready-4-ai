// const getPost = async () => {
//   await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) => console.log(post));
// };

const getPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const post = await response.json();
  console.log(post);
};

getPost();

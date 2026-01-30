// const addPost = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "Tutuł posta",
//       body: "Molestiae reprehenderit non pariatur sunt quia rerum dolor dolores voluptatem.",
//       userId: 1,
//     }),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   });

//   const post = await response.json();
//   console.log(post);
// };

const addPost = async () => {
  const request = {
    method: "POST",
    body: JSON.stringify({
      title: "Tutuł posta",
      body: "Molestiae reprehenderit non pariatur sunt quia rerum dolor dolores voluptatem.",
      userId: 1,
    }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    request,
  );

  const post = await response.json();
  console.log(post);
};

addPost();

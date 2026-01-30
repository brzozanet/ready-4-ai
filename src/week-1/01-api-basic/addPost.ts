export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// NOTE: Inline (proste, jednorazowe)
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
//
// if (!response.ok) {
//   throw new Error(`Błąd HTTP! Status: ${response.status}`);
// }
//
//   const post = await response.json();
//   console.log(post);
// };

// NOTE: request w zmiennej (czytelność / reuse / testy):
const addPost = async () => {
  try {
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

    if (!response.ok) {
      throw new Error(`HTTP status code ${response.status}`);
    }

    const post: Post = await response.json();
    console.log(post);
  } catch (error) {
    console.error(`Task failed successfully :) ${error}`);
  }
};

addPost();

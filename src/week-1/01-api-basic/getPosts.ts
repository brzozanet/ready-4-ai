type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPosts = async (): Promise<void> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP status code ${response.status}`);
    }
    const posts: Post[] = await response.json();
    console.log(posts);
  } catch (error) {
    console.error(`Task failed successfully :) ${error}`);
  }
};

getPosts();

import dotenv from "dotenv";
import readline from "node:readline";
import Replicate from "replicate";
import fs from "fs";

dotenv.config();

const consoleReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askUserForPrompt(userPrompt: string): Promise<string> {
  return new Promise((resolve) => {
    consoleReader.question(userPrompt, (answer: string) => {
      resolve(answer);
    });
  });
}

async function createImageByAI() {
  const replicate = new Replicate();

  const userAnswer = await askUserForPrompt(
    `
  🤖: Napisz, jaki mam stworzyć obraz?
  👱: `,
  );

  const input = {
    prompt: userAnswer,
    image_size: "1K",
    aspect_ratio: "4:3",
    output_format: "jpg",
    safety_filter_level: "block_medium_and_above",
  };

  const output = (await replicate.run("google/imagen-4", {
    input,
  })) as ReadableStream;

  // Konwersja ReadableStream -> Buffer -> zapis do pliku
  const reader = output.getReader();
  const chunks: Uint8Array[] = [];

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
  }

  const buffer = Buffer.concat(chunks);
  fs.writeFileSync("output.png", buffer);
  console.log(`
  🤖: Zapisano output.png`);

  consoleReader.close();
}

createImageByAI().catch((error) => {
  console.error(`⚠️ App crashed succesfully: ${error}`);
  consoleReader.close();
});

// URL {
//   href: 'https://replicate.delivery/xezq/HMCfATeS8xvP2UQ9voCnGe7uGtjaKjtiYOXS1hHSOUS6rjXsA/tmp497g5k2l.jpg',
//   origin: 'https://replicate.delivery',
//   protocol: 'https:',
//   username: '',
//   password: '',
//   host: 'replicate.delivery',
//   hostname: 'replicate.delivery',
//   port: '',
//   pathname: '/xezq/HMCfATeS8xvP2UQ9voCnGe7uGtjaKjtiYOXS1hHSOUS6rjXsA/tmp497g5k2l.jpg',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }

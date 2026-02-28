import dotenv from "dotenv";
import readline from "node:readline";

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
  consoleReader.close();
}

createImageByAI().catch((error) => {
  console.log(`⚠️ App crashed succesfully: ${error}`);
  consoleReader.close();
});

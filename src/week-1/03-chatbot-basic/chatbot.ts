import dotenv from "dotenv";
import OpenAI from "openai";
import readline from "node:readline";

dotenv.config();
const client = new OpenAI();

const consoleReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question: string) =>
  new Promise<string>((resolve) => consoleReader.question(question, resolve));

async function chatbot() {
  console.log(
    `
      🚀 Rozpocznij rozmowę zadając pytania
      ⚠️  Czatbot nie pamięta historii rozmowy
      ❌ Aby zakończyć rozmowę, napisz "koniec"
    `,
  );
  while (true) {
    const userInput = (await ask("Ty: ")).trim();

    if (userInput.toLowerCase() === "koniec") {
      console.log("Do zobaczenia!");
      break;
    }

    const response = await client.responses.create({
      model: "gpt-5-nano",
      input: userInput,
    });

    console.log(`AI: ${response.output_text}`);
  }

  consoleReader.close();
}

chatbot().catch((error) => {
  console.error("Błąd:", error);
  consoleReader.close();
});

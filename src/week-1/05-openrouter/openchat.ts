import dotenv from "dotenv";
import readline from "node:readline";
import { OpenRouter } from "@openrouter/sdk";

dotenv.config();

const consoleReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (question: string) =>
  new Promise<string>((resolve) => consoleReader.question(question, resolve));

async function openchat() {
  console.log(
    `
      🚀 Rozpocznij rozmowę zadając pytania
      💡 Czatbot pamięta całą historię rozmowy, aż jej nie zakończysz
      ❌ Aby zakończyć rozmowę, napisz "koniec"
    `,
  );

  while (true) {
    const userInput = await ask("Ty: ");
    const openrouter = new OpenRouter({
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const embedding = await openrouter.embeddings.generate({
      requestBody: {
        model: "nvidia/llama-nemotron-embed-vl-1b-v2:free",
        input: [
          {
            content: [{ type: "text", text: "What is in this image?" }],
          },
        ],
        encodingFormat: "float",
      },
    });

    // console.log(embedding.data[0].embedding.slice(0, 5));
  }
}

openchat();

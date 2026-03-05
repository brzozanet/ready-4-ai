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
      💡 Czatbot pamięta całą historię rozmowy, aż jej nie zakończysz
      ❌ Aby zakończyć rozmowę, napisz "koniec"
    `,
  );

  let previousResponseId: string | undefined = undefined;

  while (true) {
    const userInput = (await ask("Ty: ")).trim();

    if (userInput.toLowerCase() === "koniec") {
      console.log("Do zobaczenia!");
      break;
    }

    const response: OpenAI.Responses.Response = await client.responses.create({
      model: "gpt-5-nano",
      input: userInput,
      // NOTE: previous_response_id łączy odpowiedzi w jedną historię rozmowy
      previous_response_id: previousResponseId,
    });

    console.log(`AI: ${response.output_text}`);

    // NOTE: zapamiętuje identyfikator bieżącej odpowiedzi, żeby w następnej iteracji
    // przekazać go jako previous_response_id i zachować historię rozmowy
    previousResponseId = response.id;
  }

  consoleReader.close();
}

chatbot().catch((error) => {
  console.error("App crashed succesfully 😆", error);
  consoleReader.close();
});

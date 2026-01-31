import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";
const client = new OpenAI();

// NOTE: SDK OpenAI automatycznie szuka zmiennej OPENAI_API_KEY z pliku .env
// i używa jej do autoryzacji bez jawnego podawania klucza w kodzie

const response = await client.responses.create({
  model: "gpt-5-nano",
  input: "Opowiedz losowy żart o programiście. Nie pytaj czy chcę kolejny",
});

// kom

console.log(response.output_text);

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

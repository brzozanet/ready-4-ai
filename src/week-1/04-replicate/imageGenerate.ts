import dotenv from "dotenv";
import readline from "node:readline";

dotenv.config();

import { stdin as input, stdout as output } from "node:process";

const consoleReader = readline.createInterface({ input, output });

const answer = await consoleReader.question("What do you think of Node.js? ");

console.log(`Thank you for your valuable feedback: ${answer}`);

consoleReader.close();

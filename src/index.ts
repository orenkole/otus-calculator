/* eslint-disable */
import readline from "readline";
import { calculate } from "./functions/calculate";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("> ", (expression: string) => {
  console.log("> ", calculate(expression));
  rl.close();
});

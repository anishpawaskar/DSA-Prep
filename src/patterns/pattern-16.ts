import { CAPITAL_ALPHABETS } from "../constants/alphabets.constant.js";

function pattern16(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += CAPITAL_ALPHABETS[i - 1];
    }

    result += "\n";
  }

  return result;
}

console.log(pattern16(5));

import { CAPITAL_ALPHABETS } from "../constants/alphabets.constant.js";

function pattern18(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = n - i; j <= n - 1; j++) {
      result += CAPITAL_ALPHABETS[j];
    }

    result += "\n";
  }

  return result;
}

console.log(pattern18(5));

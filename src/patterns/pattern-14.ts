import { CAPITAL_ALPHABETS } from "../constants/alphabets.constant.js";

function pattern14(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      result += CAPITAL_ALPHABETS[j - 1];
    }
    result += "\n";
  }

  return result;
}

console.log(pattern14(5));

import { CAPITAL_ALPHABETS } from "../constants/alphabets.constant.js";

function pattern15(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      result += CAPITAL_ALPHABETS[j - 1];
    }

    result += "\n";
  }

  return result;
}

console.log(pattern15(5));

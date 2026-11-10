import { CAPITAL_ALPHABETS } from "../constants/alphabets.constant.js";

function pattern17(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    // Left space
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    // Chars
    const breakPoint = (2 * i + 1) / 2;
    for (let k = 0; k < 2 * i + 1; k++) {
      result +=
        k < breakPoint ? CAPITAL_ALPHABETS[k] : CAPITAL_ALPHABETS[2 * i - k];
    }

    // Right space
    for (let j = 0; j < n - i - 1; j++) {
      result += " ";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern17(5));

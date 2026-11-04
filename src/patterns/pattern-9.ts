function pattern9(n: number): string {
  let result = "";

  for (let i = 0; i < n * 2; i++) {
    const space = i < n ? n - i - 1 : i - n;
    const star = i < n ? 2 * i + 1 : 2 * (n - (i - n)) - 1;

    // Left Space
    for (let j = 0; j < space; j++) {
      result += " ";
    }

    // Star
    for (let k = 0; k < star; k++) {
      result += "*";
    }

    // Right Space
    for (let j = 0; j < space; j++) {
      result += " ";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern9(2));

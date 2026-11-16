function pattern19(n: number): string {
  let result = "";

  for (let i = 1; i <= n * 2; i++) {
    const star = i <= n ? n - i + 1 : i - n;

    // Left Star
    for (let j = 1; j <= star; j++) {
      result += "*";
    }

    // Space
    const space = 2 * n - star * 2;
    for (let k = 1; k <= space; k++) {
      result += " ";
    }

    // Right Star
    for (let j = 1; j <= star; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern19(4));

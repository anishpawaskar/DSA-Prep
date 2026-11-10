function pattern20(n: number): string {
  let result = "";

  for (let i = 1; i <= n * 2 - 1; i++) {
    const star = i <= n ? i : 2 * n - i;

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
    for (let j = star; j >= 1; j--) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern20(4));

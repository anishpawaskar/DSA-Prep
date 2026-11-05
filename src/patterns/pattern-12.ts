function pattern12(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    // Left Number
    for (let j = 1; j <= i; j++) {
      result += `${j}`;
    }

    // Space
    for (let k = 1; k <= n * 2 - i * 2; k++) {
      result += " ";
    }

    // Right Number
    for (let j = i; j >= 1; j--) {
      result += `${j}`;
    }

    result += "\n";
  }

  return result;
}

console.log(pattern12(4));

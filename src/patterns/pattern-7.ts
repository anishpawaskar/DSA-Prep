function pattern7(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    // Left Space
    for (let j = 0; j < n - i - 1; j++) {
      console.log("inner j", j);
      result += " ";
    }

    // star
    for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
    }

    // right space
    for (let k = 0; k < n - i - 1; k++) {
      result += " ";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern7(5));

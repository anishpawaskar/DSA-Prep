function pattern10(n: number): string {
  let result = "";

  for (let i = 0; i < n * 2 - 1; i++) {
    let stars = i > n - 1 ? 2 * n - (i + 1) : i + 1;

    for (let j = 0; j < stars; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern10(5));

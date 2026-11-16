function pattern3(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += `${j + 1} `;
    }
    result += "\n";
  }

  return result;
}

console.log(pattern3(5));

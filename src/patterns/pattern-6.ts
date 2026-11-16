function pattern6(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      result += `${j + 1} `;
    }

    result += "\n";
  }

  return result;
}

console.log(pattern6(5));

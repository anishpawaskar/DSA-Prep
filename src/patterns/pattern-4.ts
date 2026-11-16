function pattern4(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      result += `${i + 1} `;
    }

    result += "\n";
  }

  return result;
}

console.log(pattern4(5));

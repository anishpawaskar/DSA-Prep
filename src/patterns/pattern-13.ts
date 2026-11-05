function pattern13(n: number): string {
  let num = 0;
  let result = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      num += 1;
      result += `${num} `;
    }

    result += "\n";
  }

  return result;
}

console.log(pattern13(5));

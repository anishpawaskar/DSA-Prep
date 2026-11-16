function pattern22(n: number): string {
  let result = "";
  const size = 2 * n - 1;

  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const top = i - 1;
      const left = j - 1;
      const right = size - j;
      const bottom = size - i;

      result += `${n - Math.min(Math.min(top, bottom), Math.min(left, right))}`;
    }

    result += "\n";
  }

  return result;
}

console.log(pattern22(4));

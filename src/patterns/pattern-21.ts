function pattern21(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    // Left star
    const leftStar = i === 1 || i === n ? n : 1;
    for (let j = 1; j <= leftStar; j++) {
      result += "*";
    }

    // Space
    const space = i === 1 || i === n ? 0 : n - 2;
    for (let j = 1; j <= space; j++) {
      result += " ";
    }

    // Right Star
    const rightStar = i === 1 || i === n ? 0 : 1;
    for (let j = 1; j <= rightStar; j++) {
      result += "*";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern21(2));
console.log(pattern21(4));
console.log(pattern21(5));

function pattern8(n: number): string {
  let result = "";

  for (let i = 0; i < n; i++) {
    // Left space
    for (let j = 0; j < i; j++) {
      result += " ";
    }

    //Star
    for (let k = 0; k < (n - (i + 1)) * 2 + 1; k++) {
      result += "*";
    }

    // Right spcae
    for (let j = 0; j < i; j++) {
      result += " ";
    }

    result += "\n";
  }

  return result;
}

console.log(pattern8(5));

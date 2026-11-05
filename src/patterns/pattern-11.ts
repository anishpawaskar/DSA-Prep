function pattern11(n: number): string {
  let reuslt = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      reuslt += "*";
    }

    reuslt += "\n";
  }

  return reuslt;
}

console.log(pattern11(5));

function pattern11(n: number): string {
  let reuslt = "";

  for (let i = 1; i <= n; i++) {
    const isRowEven = i % 2 === 0;

    for (let j = 1; j <= i; j++) {
      const isColumnEven = j % 2 === 0;

      if (isRowEven) {
        reuslt += isColumnEven ? "1" : "0";
      } else {
        reuslt += isColumnEven ? "0" : "1";
      }
    }

    reuslt += "\n";
  }

  return reuslt;
}

console.log(pattern11(5));

function backtrack(i: number, n: number) {
  if (i < 1) return;

  backtrack(i - 1, n);

  console.log(i);
}

backtrack(3, 3);

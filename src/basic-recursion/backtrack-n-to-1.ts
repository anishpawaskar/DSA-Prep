function backtrack(i: number, n: number) {
  if (i > n) return;

  backtrack(i + 1, n);

  console.log("Backtrack: ", i);
}

backtrack(1, 5);

function print1ToN(n: number) {
  if (n === 0) return;

  print1ToN(n - 1);

  console.log(n);
}

print1ToN(5);

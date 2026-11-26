function printName(n: number) {
  if (n === 0) return;

  console.log("Anish");
  printName(n - 1);
}

printName(5);

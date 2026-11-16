function primeUptoN(n: number) {
  let count = 0;

  for (let i = 2; i <= n; i++) {
    const isP = isPrime(i);

    if (isP) {
      count++;
    }
  }

  console.log(count);
}

function isPrime(n: number) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

primeUptoN(6);
primeUptoN(10);
primeUptoN(20);

function largeOddNum(s: string): string {
  for (let i = s.length - 1; i >= 0; i--) {
    const digit = Number(s[i]);

    if (digit % 2 !== 0) {
      return s.slice(0, i + 1).replace(/^0+/, "");
    }
  }

  return "";
}

console.log(largeOddNum("5347"));
console.log(largeOddNum("0214638"));
console.log(largeOddNum("0032579"));

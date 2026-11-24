function reverseString(s: string[]): string[] {
  const result: string[] = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (char !== undefined) {
      result.push(char);
    }
  }

  return result;
}

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["b", "y", "e"]));
console.log(reverseString(["h", "a", "n", "n", "a", "h"]));

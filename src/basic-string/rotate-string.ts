function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (s === goal) {
      return true;
    }

    const firstChar = s[0];
    const remainingChar = s.slice(1, s.length);

    s = remainingChar + firstChar;
  }

  return false;
}

console.log(rotateString("abcde", "cdeab"));
console.log(rotateString("abcde", "adeac"));
console.log(rotateString("abcde", "abcde"));

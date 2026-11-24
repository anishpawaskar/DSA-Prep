function palindromeCheck(s: string): boolean {
  let reversedStr = "";

  for (let i = s.length - 1; i >= 0; i--) {
    const char = s[i];

    if (char !== undefined) {
      reversedStr += char;
    }
  }

  return s === reversedStr;
}

console.log(palindromeCheck("hannah"));
console.log(palindromeCheck("aabbaaa"));
console.log(palindromeCheck("aabbccbbaa"));

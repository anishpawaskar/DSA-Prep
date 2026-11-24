function longestCommonPrefix(s: string[]) {
  let result = "";
  const defaultPrefix = s[0]!;

  if (!s.length) return result;

  for (let i = 0; i < defaultPrefix.length; i++) {
    for (let j = 1; j < s.length; j++) {
      const currentWord = s[j]!;

      if (i >= currentWord.length || currentWord[i] !== defaultPrefix[i]) {
        return result;
      }
    }

    result += defaultPrefix[i];
  }

  return result;
}

console.log(longestCommonPrefix(["flowers", "flow", "fly", "flight"]));
console.log(longestCommonPrefix(["dog", "cat", "animal", "monkey"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["lady", "lazy"]));

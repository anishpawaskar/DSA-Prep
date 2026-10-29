export function longestCommonPrefix(strs: string[]): string | undefined {
  if (!strs.length) return "";

  const firstWord = strs[0];

  if (firstWord === undefined) return;

  let result = "";

  for (let i = 0; i < firstWord.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      const currentWord = strs[j];

      if (currentWord === undefined) return;

      if (i >= currentWord.length || firstWord[i] !== currentWord[i]) {
        return result;
      }
    }

    result += firstWord[i];
  }

  return result;
}

const words = ["carpet", "car"];

console.log("Longest common prefix", longestCommonPrefix(words));

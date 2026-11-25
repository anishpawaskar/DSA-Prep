function anagramStrings(s: string, t: string) {
  if (s.length !== t.length) return false;

  const sourceFreq = new Map();
  const targetFreq = new Map();

  for (let i = 0; i < s.length; i++) {
    const source = s[i]!;
    const target = t[i];

    sourceFreq.set(source, (sourceFreq.get(source) ?? 0) + 1);
    targetFreq.set(target, (targetFreq.get(target) ?? 0) + 1);
  }

  for (const [char, sourceFreqCount] of sourceFreq) {
    const targetFreqCount = targetFreq.get(char);

    if (sourceFreqCount !== targetFreqCount) {
      return false;
    }
  }

  return true;
}

console.log(anagramStrings("anagram", "nagaram"));
console.log(anagramStrings("dog", "cat"));
console.log(anagramStrings("eat", "ate"));

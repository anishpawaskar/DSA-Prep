function isomorphicString(s: string, t: string) {
  if (s.length !== t.length) return false;

  const sourceToTarget = new Map();
  const targetToSocure = new Map();

  for (let i = 0; i < s.length; i++) {
    const source = s[i];
    const target = t[i];

    if (sourceToTarget.has(source) && sourceToTarget.get(source) !== target) {
      return false;
    }

    if (targetToSocure.has(target) && targetToSocure.get(target) !== source) {
      return false;
    }

    sourceToTarget.set(source, target);
    targetToSocure.set(target, source);
  }

  return true;
}

console.log(isomorphicString("egg", "add"));
console.log(isomorphicString("ab", "cc"));
console.log(isomorphicString("apple", "bbnbm"));

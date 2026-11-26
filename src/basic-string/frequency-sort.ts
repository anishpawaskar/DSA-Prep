function frequencySort(s: string) {
  const map: Map<string, number> = new Map();

  for (const char of s) {
    map.set(char, (map.get(char) ?? 0) + 1);
  }

  const arr = [...map];

  arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }

    return a[0].localeCompare(b[0]);
  });

  return arr.map((item) => item[0]);
}

console.log(frequencySort("tree"));
console.log(frequencySort("raaaajj"));
console.log(frequencySort("bbccddaaa"));

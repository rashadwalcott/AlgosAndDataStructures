function split(string) {
  // split('abc') // should return ['ab', 'c_']
  // split('abcdef') // should return ['ab', 'cd', 'ef']
  let words = string.split("");

  let result = [];
  for (let i = 0; i < words.length; i = i + 2) {
    if (words.length % 2 === 0) {
      result.push(`${words[i] + words[i + 1]}`);
    } else {
      result.push(`${words[i] + words[i + 1]}`);
    }
  }
  return result;
}

split("abcde");

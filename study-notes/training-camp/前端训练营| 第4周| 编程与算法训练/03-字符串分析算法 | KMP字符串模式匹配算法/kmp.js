function kmp(source, pattern) {
  // 计算table
  let table = new Array(pattern.length).fill(0);
  {
    // i 自重复串开始的位置
    // j 已重复的字数
    let i = 1, j = 0;

    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;
      } else {
        if (j > 0)
          j = table[j];
        else
          ++i;
      }
    }
  }

  {
    // i 是source串的位置
    // j 是pattern串的位置
    let i = 0, j = 0;
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i, ++j;
      } else {
        if (j > 0)
          j = table[j];
        else
          ++i;
      }
      if (j === pattern.length)
        return true;
    }
    return false;
  }

  // abcdabce
  // aabaaac

  // 匹配
}

console.log(kmp('Helxlo', 'll'));
/**
 * https://leetcode-cn.com/problems/word-ladder/
 */

{
  let ladderLength = function (beginWord, endWord, wordList) {
    const words = new Set(wordList)
    if (!words.has(endWord)) return 0
    let begins = new Set(), ends = new Set()
    begins.add(beginWord)
    ends.add(endWord)
    let res = 1
    while (begins.size > 0) {
      const nextBegins = new Set()
      for (const w of begins) {
        for (let i = 0; i < w.length; i++) {
          for (let j = 0; j < 26; j++) {
            const c = String.fromCharCode(97 + j)
            if (w[i] !== c) {
              const newWord = w.slice(0, i) + c + w.slice(i + 1)
              if (ends.has(newWord)) return res + 1
              if (words.has(newWord)) {
                nextBegins.add(newWord)
                words.delete(newWord)
              }
            }
          }

        }
      }
      begins = nextBegins
      res++
      if (begins.size > ends.size) {
        [begins, ends] = [ends, begins]
      }
    }
    return 0
  }
}
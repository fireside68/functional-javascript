'use strict'

function countWords (inputWords) {
  var result = {}

  inputWords.reduce(function (prev, curr, indx, countWords) {
    if (!result[curr]) {
      result[curr] = 1
    } else {
      result[curr]++
    }
    return curr
  }, null)
  return result
}

module.exports = countWords

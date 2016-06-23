'use strict'

function getShortMessages (messages) {
  return messages
  .map(obj =>
    obj.message
  )
    .filter(obj =>
      obj.length < 50
    )
}

module.exports = getShortMessages

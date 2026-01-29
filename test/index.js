'use strict'

const test = require('ava')

const bot = require('cloudflare-bot-directory')

test('there is no empty string for userAgents', t => {
  t.false(bot.some(bot => bot.userAgents.some(userAgent => userAgent === '')))
})

test('there is no empty string for userAgentPatterns', t => {
  t.false(
    bot.some(bot =>
      bot.userAgentPatterns.some(userAgentPattern => userAgentPattern === '')
    )
  )
})

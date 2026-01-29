import bots from '../src/index.js'

console.log('categories: ')
console.log(
  [...new Set(bots.map(bot => bot.category))].forEach(category =>
    console.log(` - ${category}`)
  )
)

console.log('kind:')
console.log(
  [...new Set(bots.map(bot => bot.kind))].forEach(kind =>
    console.log(` - ${kind}`)
  )
)

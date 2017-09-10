const Ged145Server = require('ged-145-server')
const axios = require('axios')
require('dotenv').load()
const ged = new Ged145Server(process.env.listen_address, process.env.listen_port)

ged.on('ece.lookup', async function(callData) {
  console.log('this is ece.lookup subtype')
  console.log('callData received: ', callData)
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
  const confirmation = response.data.userId
  return {
    VAR10_TAG: String(confirmation)
  }
})

ged.on('test.reply', async function(callData) {
  console.log('this is test.reply subtype')
  console.log('callData received: ', callData)
  return
})

ged.start()

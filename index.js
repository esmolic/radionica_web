const express = require('express')
const pg = require('pg')

var cors = require('cors')
var app = express()
 
app.use(cors())


const client = new pg.Client({
  user: 'web_radionica_db_user',
  host: 'dpg-ckp018oujous73c3qbg0-a',
  database: 'web_radionica_db',
  password: '2kePjBU4mJCgbFemSTkY2Str74AfOqEo',
  port: 5432,
})
 

const port = 3000

app.get('/', async (req, res) =>  {
  await client.connect()
  const data = await client.query('SELECT * from person')
  res.send(data)
  await client.disconnect()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
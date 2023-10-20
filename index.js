const express = require('express')

const pgp = require('pg-promise')()
const db = pgp( 'postgres://web_radionica_db_user:2kePjBU4mJCgbFemSTkY2Str74AfOqEo@dpg-ckp018oujous73c3qbg0-a/web_radionica_dbg')
var cors = require('cors')
var app = express()
 
app.use(cors())


const port = 3000

app.get('/', async (req, res) =>  {
  const data = await db.query('SELECT * from person')
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
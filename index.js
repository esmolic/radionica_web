const express = require('express')

const pgp = require('pg-promise')()
const db = pgp( 'postgres://web_radionica_db_user:2kePjBU4mJCgbFemSTkY2Str74AfOqEo@dpg-ckp018oujous73c3qbg0-a/web_radionica_dbg')
var cors = require('cors')
var app = express()
 
app.use(cors())


const port = 3000

app.get('/', async (req, res) =>  {
  await db.any('SELECT * from person').then(data => res.send(data)).catch(err => res.send(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
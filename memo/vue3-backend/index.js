const express = require('express')
const app = express()
const port = 3000

const memos =["메모 1", "메모 2", "메모 3", "메모 4"];

app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.post('/api/memos', (req, res) => {
    res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
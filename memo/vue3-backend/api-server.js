const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const database = require('./database.js')

app.use(bodyParser.json());

// memos 보내기
app.get('/api/memos', async (req, res) => {
  const result = await database.run("select * from memos");
  res.send(result);
})

// memos 삽입
app.post('/api/memos', async (req, res) => {
  await database.run(`insert into memos(memo) values ('${req.body.memo}')`);
  const result = await database.run("select * from memos");
  res.send(result)
})

// memo 수정
app.put('/api/memo', async (req, res) => {
  await database.run(`update memos set memo='${req.body.memo}' where id = '${req.body.id}'`);
  const result = await database.run("select * from memos");
  res.send(result)
})

//memo 삭제
app.delete('/api/memos/:id', async (req, res) => {
  await database.run(`DELETE FROM memo.memos WHERE id=${req.params.id}`);
  const result = await database.run("select * from memos");
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
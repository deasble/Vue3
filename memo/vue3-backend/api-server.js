const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const database = require('./database.js')
const { body, validationResult } = require('express-validator');

app.use(bodyParser.json());

const selectQuery = "select * from memos order by id desc";

// memos 보내기
app.get('/api/memos', async (req, res) => {
  const result = await database.run(selectQuery);
  res.send(result);
})

// memos 삽입
app.post('/api/memos', body('memo', '공백입니다.').trim().notEmpty(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await database.run(`insert into memos(memo) values ('${req.body.memo}')`);
  const result = await database.run(selectQuery);
  res.send(result);
})

// memo 수정
app.put('/api/memo', body('memo', '공백입니다.').trim().notEmpty(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await database.run(`update memos set memo='${req.body.memo}' where id = '${req.body.id}'`);
  const result = await database.run(selectQuery);
  res.send(result);
})

//memo 삭제
app.delete('/api/memos/:id', async (req, res) => {
  await database.run(`DELETE FROM memo.memos WHERE id=${req.params.id}`);
  const result = await database.run(selectQuery);
  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
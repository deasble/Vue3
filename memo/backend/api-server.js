const express = require('express')
const bodyParser = require('body-parser');
const database = require('./database');
const app = express()
const port = 3000

app.use(bodyParser.json());

const SELECT_QUERY = "SELECT * FROM todolist WHERE status != 'delete' ORDER BY ORDERLIST ASC";

app.get('/api/todolist', async (req, res) => {
  const result = await database.run(SELECT_QUERY);
  res.send(result);
})

app.post('/api/todolist', async (req, res) => {
  await database.run(`INSERT INTO todolist (memo, orderlist) VALUES ('${req.body.memo}', (SELECT IFNULL(MAX(id)+1, 1) FROM todolist t))`);
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.put('/api/todolist', async (req, res) => {
  await database.run(`UPDATE todolist SET memo='${req.body.memo}' WHERE id=${req.body.id}`)
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.put('/api/status', async (req, res) => {
  await database.run(`UPDATE todolist SET status='${req.body.status}' WHERE id=${req.body.id}`)
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.post('/api/orderlist', async (req, res) => {
  if(req.body.event.newIndex < req.body.event.oldIndex) {
    await database.run(`UPDATE TODOLIST SET ORDERLIST=ORDERLIST+1 WHERE orderlist>=${req.body.event.newIndex + 1} and orderlist<${req.body.event.oldIndex + 2}`);
    await database.run(`UPDATE TODOLIST SET ORDERLIST=${req.body.event.newIndex + 1} WHERE id=${req.body.event.element.id}`);
  } else {
    await database.run(`UPDATE TODOLIST SET ORDERLIST=ORDERLIST-1 WHERE orderlist<=${req.body.event.newIndex + 1} and orderlist>${req.body.event.oldIndex + 2}`);
    await database.run(`UPDATE TODOLIST SET ORDERLIST=${req.body.event.newIndex + 1} WHERE id=${req.body.event.element.id}`);
  }
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
const express = require('express')
const bodyParser = require('body-parser');
const database = require('./database');
const app = express()
const port = 3000

app.use(bodyParser.json());

const SELECT_QUERY = "SELECT * FROM todolist WHERE status != 'delete' ORDER BY LOCATION ASC";

app.get('/api/todolist', async (req, res) => {
  const result = await database.run(SELECT_QUERY);
  res.send(result);
})

app.post('/api/todolist', async (req, res) => {
  await database.run(`INSERT INTO todolist (memo, LOCATION) VALUES ('${req.body.memo}', (SELECT IFNULL(MAX(id)+1, 1) FROM todolist t))`);
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

app.post('/api/location', async (req, res) => {
  if(req.body.newIndex < req.body.oldIndex) {
    await database.run(`UPDATE TODOLIST SET LOCATION=LOCATION+1 WHERE LOCATION>=${req.body.newIndex}+1 AND LOCATION<${req.body.oldIndex}+1`);
    await database.run(`UPDATE TODOLIST SET LOCATION=${req.body.newIndex}+1 WHERE id=${req.body.element.id}`);
  } else {
    await database.run(`UPDATE TODOLIST SET LOCATION=LOCATION-1 WHERE LOCATION<=${req.body.newIndex}+1 AND LOCATION>${req.body.oldIndex}+1`);
    await database.run(`UPDATE TODOLIST SET LOCATION=${req.body.newIndex}+1 WHERE id=${req.body.element.id}`);
  }
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
const express = require('express')
const bodyParser = require('body-parser');
const database = require('./database');
const app = express()
const port = 3000

app.use(bodyParser.json());

const SELECT_QUERY = "SELECT * FROM todolist";

app.get('/api/todolist', async (req, res) => {
  const result = await database.run(SELECT_QUERY);
  res.send(result);
})

app.post('/api/todolist', async (req, res) => {
  await database.run(`INSERT INTO todolist (memo) VALUES ('${req.body.memo}')`);
  const result = await database.run(SELECT_QUERY);
  res.send(result)
})

app.put('/api/todolist', (req, res) => {
  const result = todo_list.map(todo => {
    if(todo.id === req.body.id) return todo = req.body;
    else return todo
  })
  todo_list = result
  res.send(todo_list)
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
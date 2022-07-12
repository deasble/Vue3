const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

let todo_list = [
    {
        id: 1,
        memo: "메모 1",
        status: "created",
    },
    {
        id: 2,
        memo: "메모 2",
        status: "created",
    },
    
]

app.get('/api/todolist', (req, res) => {
  res.send(todo_list)
})

app.post('/api/todolist', (req, res) => {
  todo_list.push(req.body);
  res.send(todo_list)
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
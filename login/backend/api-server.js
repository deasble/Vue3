const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');


app.use(bodyParser.json());
app.use(cookieParser())

const members = [
  {
    id: 3,
    name: "도서관",
    loginId: "lib",
    loginPw: "africa",
  },
  {
    id: 4,
    name: "홍길동",
    loginId: "a",
    loginPw: "1",
  },
];

const jwtKey = "ab123456";

app.get('/api/account', (req, res) => {
  if(req.cookies && req.cookies.token) {
    jwt.verify(req.cookies.token, jwtKey, (err, decoded) => {
      if(err) return res.sendStatus(401);
      
      res.send(decoded);
    })
  } else res.sendStatus(401);
})

app.post('/api/account', (req, res) => {
  const loginId = req.body.id; 
  const loginPw = req.body.pw;

  const member = members.find(member => member.loginId === loginId && member.loginPw === loginPw);
  
  if(member) {
    const options = {
      domain: "localhost",
      path: "/",
      httpOnly: true,
      sameSite: 'strict',
    };

    const token = jwt.sign({
      id: member.id,
      name: member.name,
    }, jwtKey, {
      expiresIn: "30s",
      issuer: "africalib",
    })

    res.cookie("token", token, options);
    res.send(member)
  } else {
    res.sendStatus(404);
  }
  
});

app.delete("/api/account", (req, res) => {
  if(req.cookies && req.cookies.token) {
    res.clearCookie("token");
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});
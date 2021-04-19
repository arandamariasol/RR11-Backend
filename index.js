const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var handleRegister = function (req, res) {
  const regUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
  };
  if (!regUser.name || !regUser.email || !regUser.password) {
      return res.status(400).json({ msg: 'Please complete fields'});
  }
  else {
      return res.json({result: 'Success register'});
  }
}

var handleLogin = function (req, res) {
  console.log(req.body)
  const logUser = {
      email: req.body.email,
      pass: req.body.password,
  };
  if (logUser.email == regUser.email && logUser.pass == regUser.password) {
      return res.json({result: 'Success login!'});
  }
  else {
      return res.status(400).json({ msg: 'Invalid user'});
  }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/register', handleRegister);

app.put('/login', handleLogin);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assume 'users' is an in-memory array for simplicity
  const users = [];
  const newUser = req.body;
  // Missing crucial validation: Check if req.body has the required fields
  users.push(newUser);
  res.status(201).json(newUser);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
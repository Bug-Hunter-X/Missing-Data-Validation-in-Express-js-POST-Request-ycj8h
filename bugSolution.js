const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const users = [];
  const { name, email } = req.body;

  // Validate request body
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = { name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
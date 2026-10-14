const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hiii from jenkins, added webhook, we are from 18 May Devops batch');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

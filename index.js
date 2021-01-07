const express = require('express');
const secure = require('ssl-express-www');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

app.use(secure);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${port}`);
});

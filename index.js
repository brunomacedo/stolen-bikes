const express = require('express');
const secure = require('ssl-express-www');
const compression = require('compression');

const port = process.env.PORT || 3000;
const app = express();

app.use(secure);
app.use(compression());
app.use(express.static(`${__dirname}/build`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${port}`);
});

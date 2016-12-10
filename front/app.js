const express = require('express'),
      path = require('path'),
      app = express();

app.set('port', 8080);

const publicDir = path.join(__dirname, 'public');
app.use(
  express.static(publicDir)
);

const server = app.listen(app.get('port'), () => {
  const port = server.address().port;
  console.log(`Listening on port ${port}`);
});

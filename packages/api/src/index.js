const http = require('http');
const app = require('./app');

const port = parseInt(process.env.PORT, 10) || 8080;

http
  .createServer(app)
  .listen(port, () => console.log(`Server started on port ${port}`));

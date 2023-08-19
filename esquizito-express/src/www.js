/* istanbul ignore file */

import http from 'http';
import { normalizePort } from 'utils/port.util';
import { app } from 'app';

const port = normalizePort(process.env.PORT || 3001);
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`listening on port ${port}`));

server.on('error', onError);

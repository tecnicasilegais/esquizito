/* istanbul ignore file */

import http from 'http';
import { app } from 'app';
import { connectToDatabase } from 'configs/connection.config';
import appConfigs from 'configs/application.config';

const port = appConfigs.appPort;
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

connectToDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});

server.listen(port, () => console.log(`listening on port ${port}`));

server.on('error', onError);

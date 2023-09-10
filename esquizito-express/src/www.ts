/* istanbul ignore file */

import http from 'http';
import appConfigs from 'configs/application.config';
import { connectToDatabase } from 'configs/connection.config';
import { app } from './app';

const port = appConfigs.appPort;

app.set('port', port);

const server = http.createServer(app);

connectToDatabase().catch((err) => {
  console.error(err);
  process.exit(1);
});

server.listen(port, () => console.log(`listening on port ${port}`));

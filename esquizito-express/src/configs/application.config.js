import * as dotenv from 'dotenv';
import { normalizePort } from 'utils/port.util';

dotenv.config();

const cors = {
  originUrl: process.env.CLIENT_ORIGIN_URL,
  appPort: normalizePort(process.env.PORT || 3001),
};

export default cors;

import * as dotenv from 'dotenv';
import { normalizePort } from 'utils/port.util';
import { CorsConfig } from './types';

dotenv.config();

const cors: CorsConfig = {
  originUrl: process.env.CLIENT_ORIGIN_URL,
  appPort: normalizePort(process.env.PORT || '3001'),
};

export default cors;

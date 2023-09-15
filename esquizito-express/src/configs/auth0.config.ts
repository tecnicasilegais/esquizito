import * as dotenv from 'dotenv';
import { Auth0Config } from './types';

dotenv.config();

const auth0: Auth0Config = {
  enabled: process.env.AUTH0_ENABLED === '1',
  audience: process.env.AUTH0_AUDIENCE,
  domain: process.env.AUTH0_DOMAIN,
};

export default auth0;

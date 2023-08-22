import * as dotenv from 'dotenv';

dotenv.config();

const auth0 = {
  enabled: process.env.AUTH0_ENABLED === '1',
  audience: process.env.AUTH0_AUDIENCE,
  domain: process.env.AUTH0_DOMAIN,
};

export default auth0;

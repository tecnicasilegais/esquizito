import * as dotenv from 'dotenv';
import { DatabaseConfig } from './types';

dotenv.config();

const db: DatabaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export default db;

import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();

const client = neon(process.env.DATABASE_URL); // Neon HTTP endpoint
const db = drizzle(client);

export default db;

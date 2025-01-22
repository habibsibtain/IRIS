import { drizzle } from 'drizzle-orm/neon-http';
import { createClient } from '@neondatabase/neon';

// Initialize the Neon client
const client = createClient({
    connectionString: process.env.DATABASE_URL, // Replace with your connection string
});

// Pass the client to Drizzle
const db = drizzle(client);

export default db;

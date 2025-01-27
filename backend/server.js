import express from 'express';
import dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/neon-http';
import emotionationalIntelligenceQNARoute from './routes/emotionalIntelligenceQNARoute.js';

dotenv.config();

const app = express();
app.use(express.json()); 


app.use('/emotionalIntelligenceQNA', emotionationalIntelligenceQNARoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

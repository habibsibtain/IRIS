import express from 'express';
import dotenv from 'dotenv';
import test_route from './routes/test.js';

dotenv.config();

const app = express();
app.use(express.json()); 


app.use('/test', test_route);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`); 
});

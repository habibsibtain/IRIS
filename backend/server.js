import express from 'express'
import { drizzle } from 'drizzle-orm/neon-http';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import questionRoutes from './routes/index.js' 

const db = drizzle(process.env.DATABASE_URL);
const app = express()

app.use(cors())
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/question' , questionRoutes)


app.listen(process.env.PORT || 5000 , ()=> {
  console.log('Server is live on PORT: ' , process.env.PORT || 5000)
})

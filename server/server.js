import express from  'express'
import cors from 'cors'
import 'dotenv/config'

import connectDB from './config/mongodb'
// const connectDB = require('./config/mongodb');
console.log(require.resolve('./config/mongodb.js'));



const PORT = process.env.PORT || 4000 

const app = express()

app.use(express.json())
app.use(cors())
await connectDB()

app.get('/', (req, res) => res.send('Api is Working'))

app.listen(PORT, (req, res) => console.log('Server is running on port' + PORT));
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './Routes/userRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

(async () => {
    await connectDB();
})();

app.use('/api/user', userRouter)

app.get('/', (req, res) => res.send('API is Working'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// https://localhost:4000/api/user/register
// https://localhost:4000/api/user/login
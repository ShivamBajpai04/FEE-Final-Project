// server.js
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://shivambajpai04:o3mTZzubx4o9ry9X@cluster0.6civnyd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'https://fee-final-project.vercel.app/',
  credentials: true,
}));

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


app.get('/', (req, res) => {
  res.send('server started ^_~');
})
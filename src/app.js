import express from 'express';
import mocksRouter from './routes/mocks.router.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/api/mocks', mocksRouter);

// Conexion a DB
const urlDB = 'mongodb://127.0.0.1:27017/coderhouse';

async function connectDB() {
    try {
        await mongoose.connect(urlDB);
        console.log('Conexion exitosa a la DB');
    } catch (error) {
        console.error(error);
    }
}
connectDB();

app.listen(PORT, () => {
    console.log(`Server run: http://localhost:${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import multer from 'multer';
import maquinaRoutes from './routes/maquinaRoutes';


dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use('/api', maquinaRoutes);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`O servidor está executando na porta ${PORT}`);
})



export default upload;
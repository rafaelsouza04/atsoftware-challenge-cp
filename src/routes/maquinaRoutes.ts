import { Router } from 'express';
import { getTodasMaquinas, getMaquinaPorId, postMaquina, putMaquinaPorId, deleteMaquinaPorId } from '../controllers/maquinaController';
import multer from 'multer';

const router = Router();
const upload = multer();

router.get('/maquinas', getTodasMaquinas);
router.get('/maquinas/:maquinaId', getMaquinaPorId);
router.post('/maquinas', upload.single('image'), postMaquina);
router.put('/maquinas/:maquinaId', upload.single('image'), putMaquinaPorId);
router.delete('/maquinas/:maquinaId', upload.single('image'), deleteMaquinaPorId);

export default router;
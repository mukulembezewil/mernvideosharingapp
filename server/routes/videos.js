import express from 'express';
import {
	addVideo,
	deleteVideo,
	getVideo,
	updateVideo,
} from '../controllers/video.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, addVideo);
router.put('/:id', verifyToken, updateVideo);
router.delete('/:id', verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id', addVideo);
router.get('/trend', addVideo);
router.get('/random', addVideo);
router.get('/sub', addVideo);

export default router;

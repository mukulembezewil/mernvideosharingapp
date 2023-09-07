import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';
import authRoutes from './routes/auth.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

const connect = () => {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => {
			console.log('Hefty congs! We are hooked up to some Mongo DB!');
		})
		.catch((err) => {
			throw err;
		});
};

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

app.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || 'Something slipped.';
	return res.status(status).json({
		success: false,
		status,
		message,
	});
});

app.listen(8800, () => {
	connect();
	console.log('Server connected and listening on 8800');
});

import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

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

app.listen(8800, () => {
	connect();
	console.log('Server connected and listening on 8800');
});

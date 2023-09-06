import mongoose from 'mongoose';
import Viduser from '../models/Viduser.js';
import bcrypt from 'bcrypt';
import { createError } from '../error.js';

export const signup = async (req, res, next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);
		const newVidUser = new Viduser({ ...req.body, password: hash });

		await newVidUser.save();
		res.status(200).send('Success! Video user has been created!');
	} catch (err) {
		next(err);
	}
};

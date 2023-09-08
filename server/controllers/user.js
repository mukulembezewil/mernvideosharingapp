import { createError } from '../error.js';
import Viduser from '../models/Viduser.js';

export const update = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await Viduser.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			next(err);
		}
	} else {
		return next(
			createError(403, "Y'only permitted to update your own business!")
		);
	}
};

export const deleteUser = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			await Viduser.findByIdAndDelete(req.params.id);
			res.status(200).json('User has been removed successfully!');
		} catch (err) {
			next(err);
		}
	} else {
		return next(
			createError(403, 'Stop!! You can only delete your account bro/sis')
		);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await Viduser.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

export const subscribe = async (req, res, next) => {
	try {
		await Viduser.findByIdAndUpdate(req.user.id, {
			$push: { subscribedUsers: req.params.id },
		});
		await Viduser.findByIdAndUpdate(req.params.id, { $inc: { subscribers: 1 } });
		res.status(200).json('Success! Subscriber added!');
	} catch (err) {
		next(err);
	}
};

export const unsubscribe = async (req, res, next) => {
	try {
		await Viduser.findByIdAndUpdate(req.user.id, {
			$pull: { subscribedUsers: req.params.id },
		});
		await Viduser.findByIdAndUpdate(req.params.id, { $inc: { subscribers: -1 } });
		res.status(200).json('Subscriber successfully removed!');
	} catch (err) {
		next(err);
	}
};

export const like = async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
};

export const dislike = async (req, res, next) => {
	try {
	} catch (err) {
		next(err);
	}
};

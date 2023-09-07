import { createError } from '../error.js';

export const update = async (req, res, next) => {
	if (req.params.id === req.user.id) {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: res.body,
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

export const deleteUser = (req, res) => {};

export const getUser = (req, res) => {};

export const subscribe = (req, res) => {};

export const unsubscribe = (req, res) => {};

export const like = (req, res) => {};

export const dislike = (req, res) => {};

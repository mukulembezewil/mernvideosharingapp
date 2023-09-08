import { createError } from '../error.js';
import Comment from '../models/Comment.js';

export const addComment = async (req, res, next) => {
	const newComment = new Comment({ ...req.body, userId: req.user.id });
	try {
		const savedComment = await newComment.save();
		res.status(200).send(savedComment);
	} catch (err) {
		next(err);
	}
};

export const deleteComment = async (req, res, next) => {
	try {
		const comment = await Comment.findById(req.params.id);
		const video = await VideoColorSpace.findById(req.params.id);
		if (req.user.id === comment.user.Id || req.user.id === video.userId) {
			await Comment.findByIdAndDelete(req.params.id);
			res.status(200).json('Comment successfully deleted!');
		} else {
			return next(createError(403, "Sorry cannot delete other users's comments!"));
		}
	} catch (err) {
		next(err);
	}
};

export const getComments = async (req, res, next) => {
	try {
		const comments = await Comment.find({ videoId: req.params.videoId });
		res.status(200).json(comments);
	} catch (err) {
		next(err);
	}
};

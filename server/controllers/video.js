import { createError } from '../error.js';
import Video from '../models/Video.js';
import Viduser from '../models/Viduser.js';

export const addVideo = async (req, res, next) => {
	const newVideo = new Video({ userId: req.user.id, ...req.body });
	try {
		const savedVideo = await newVideo.save();
		res.status(200).json(savedVideo);
	} catch (err) {
		next(err);
	}
};

export const updateVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		if (!video)
			return next(
				createError(404, "We can't find the video you seem to be looking for")
			);
		if (req.user.id === video.userId) {
			const updatedVideo = await Video.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updateVideo);
		} else {
			return next(createError(403, 'Sorry! We were unable to find that video.'));
		}
	} catch (err) {
		next(err);
	}
};

export const deleteVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		if (!video) return next(createError(404, 'Video not found!'));
		if (req.user.id === video.userId) {
			await Video.findByIdAndDelete(req.params.id);
			res.status(200).json('Success! Video has been removed!');
		} else {
			return next(
				createError(401, 'You are not authorized to do any such thing!')
			);
		}
	} catch (err) {
		next(err);
	}
};

export const getVideo = async (req, res, next) => {
	try {
		const video = await Video.findById(req.params.id);
		res.status(200).json(video);
	} catch (err) {
		next(err);
	}
};

export const addView = async (req, res, next) => {
	try {
		await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
		res.status(200).json('Great! You just increased the views for this video');
	} catch (err) {
		next(err);
	}
};

export const random = async (req, res, next) => {
	try {
		const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
};

export const trend = async (req, res, next) => {
	try {
		const videos = await Video.find().sort({ views: -1 });
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
};

export const sub = async (req, res, next) => {
	try {
		const user = await Viduser.findById(req.user.id);
		const subscribeChannels = user.subscribedUsers;

		const list = await Promise.all(
			subscribeChannels.map((channelId) => {
				return Video.find({ userId: channelId });
			})
		);

		res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
	} catch (err) {
		next(err);
	}
};

export const getByTag = async (req, res, next) => {
	const tags = req.query.tags.split(',');
	try {
		const videos = await Video.find({ tags: { $in: tags } }).limit(20);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
};

export const search = async (req, res, next) => {
	const query = req.query.q;
	try {
		const videos = await Video.find({
			title: { $regex: query, $options: 'i' },
		}).limit(40);
		res.status(200).json(videos);
	} catch (err) {
		next(err);
	}
};

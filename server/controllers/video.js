import { createError } from '../error';

export const addVideo = async (req, res, next) => {
	const newVideo = new VideoColorSpace({ userId: req.user.id, ...req.body });
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

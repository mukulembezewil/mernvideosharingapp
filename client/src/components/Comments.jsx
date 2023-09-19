import styled from 'styled-components';
import Comment from './Comment';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const NewComment = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.soft};
	background-color: transparent;
	outline: none;
	padding: 5px;
	width: 100%;
	color: ${({ theme }) => theme.textSoft};
`;

const Comments = ({ videoId }) => {
	const { currentuser } = useSelector((state) => state.user);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchComments = async () => {
			try {
				const res = await axios.get(`/comments/${videoId}`);
				setComments(res.data);
			} catch (err) {}
		};
		fetchComments();
	}, [videoId]);
	return (
		<Container>
			<NewComment>
				<Avatar src={currentuser.img} />
				<Input placeholder="Add a comment..." />
			</NewComment>
			{comments.map((comment) => (
				<Comment
					key={comment._id}
					comment={comment}
				/>
			))}
		</Container>
	);
};
export default Comments;

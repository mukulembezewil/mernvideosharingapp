import styled from 'styled-components';
import Comment from './Comment';

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

const Comments = () => {
	return (
		<Container>
			<NewComment>
				<Avatar src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/R1370284-01?pgw=1" />
				<Input placeholder="Add a comment..." />
			</NewComment>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</Container>
	);
};
export default Comments;

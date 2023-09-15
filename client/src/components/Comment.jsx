import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	gap: 10px;
	margin: 30px 0px;
`;

const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
const Name = styled.span`
	font-size: 13px;
	font-weight: 500;
`;
const Date = styled.span`
	font-size: 11px;
	font-weight: 400;
	margin-left: 5px;
	color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.span`
	font-size: 14px;
`;

const Comment = () => {
	return (
		<Container>
			<Avatar src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/R1370284-01?pgw=1" />
			<Details>
				<Name>
					Wil P M<Date>1 day ago</Date>
				</Name>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium
					quos, a ducimus non maiores dolorum vero? Magnam voluptas rem fuga non? Vel
					maxime quas placeat sunt dolorum quia veritatis!
				</Text>
			</Details>
		</Container>
	);
};
export default Comment;

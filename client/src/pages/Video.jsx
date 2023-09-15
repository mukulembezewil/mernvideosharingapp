import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
	display: flex;
	gap: 24px;
`;

const Content = styled.div`
	flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
	font-size: 16px;
	font-weight: 400;
	margin-top: 20px;
	margin-bottom: 10px;
	color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Info = styled.span`
	color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
	display: flex;
	gap: 20px;
	color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
	display: flex;
	align-items: center;
	font-size: small;
	gap: 5px;
	cursor: pointer;
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.text};
`;

const Recommendation = styled.div`
	flex: 2;
`;

const Channel = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ChannelInfo = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChannelDetail = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
	font-weight: 500;
`;

const ChannelCounter = styled.span`
	margin-top: 5px;
	margin-bottom: 20px;
	color: ${({ theme }) => theme.textSoft};
	font-size: 0.9rem;
`;

const Description = styled.p`
	font-size: 0.9rem;
`;

const Subscribe = styled.button`
	background-color: #cc1a00;
	font-weight: 500;
	color: white;
	border: none;
	border-radius: 3px;
	height: max-content;
	padding: 10px 20px;
	cursor: pointer;
`;

const Video = () => {
	return (
		<Container>
			<Content>
				<VideoWrapper>
					<iframe
						width="100%"
						height="720"
						src="https://www.youtube.com/embed/c-I5S_zTwAc?si=HPVlbmZCHTCCwFbb"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</VideoWrapper>
				<Title>Wil's Adventures</Title>
				<Details>
					<Info> 7, 987, 154 views . Sept 12, 2023</Info>
					<Buttons>
						<Button>
							<ThumbUpIcon />
							123
						</Button>
						<Button>
							<ThumbDownIcon /> Dislike
						</Button>
						<Button>
							<ShareIcon />
							Share
						</Button>
						<Button>
							<SaveIcon />
							Save
						</Button>
					</Buttons>
				</Details>
				<Hr />
				<Channel>
					<ChannelInfo>
						<Image src="https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/R1370284-01?pgw=1" />
						<ChannelDetail>
							<ChannelName>Mukulembeze</ChannelName>
							<ChannelCounter>200m subscribers</ChannelCounter>
							<Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorum
								vitae, dignissimos perspiciatis saepe maxime dicta est maiores
								praesentium, quaerat reiciendis sed in inventore aspernatur? Incidunt
								adipisci a aspernatur in!
							</Description>
						</ChannelDetail>
					</ChannelInfo>
					<Subscribe>Subscribe</Subscribe>
				</Channel>
				<Hr />
				<Comments />
			</Content>
			<Recommendation>
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
				<Card type="sm" />
			</Recommendation>
		</Container>
	);
};
export default Video;

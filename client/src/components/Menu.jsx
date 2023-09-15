import styled from 'styled-components';
import logoImage from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link } from 'react-router-dom';

const Container = styled.div`
	flex: 1;
	background-color: ${({ theme }) => theme.bgLighter};
	height: 960px;
	color: ${({ theme }) => theme.text};
	font-size: 0.8rem;
	position: sticky;
	top: 0px;
`;

const Wrapper = styled.div`
	padding: 18px 26px;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	font-weight: bold;
	margin-bottom: 25px;
`;

const Img = styled.img`
	height: 25px;
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	cursor: pointer;
	padding: 7.5px 0;
	&:hover {
		background-color: ${({ theme }) => theme.soft};
	}
`;

const Hr = styled.hr`
	margin: 15px 0px;
	border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
	padding: 5px 15px;
	background-color: transparent;
	border: 1px solid #3ea6ff;
	color: #3ea6ff;
	border-radius: 3px;
	font-weight: 500;
	margin-top: 10px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 5px;
`;

const Title = styled.h2`
	font-size: 0.7rem;
	font-weight: 500;
	color: #aaaaaa;
	margin-bottom: 20px;
`;

const Menu = ({ darkMode, setdarkMode }) => {
	return (
		<Container>
			<Wrapper>
				<Link
					to="/"
					style={{ textDecoration: 'none', color: 'inherit' }}
				>
					<Logo>
						<Img src={logoImage} />
						Wilz Vid-Tube
					</Logo>
				</Link>
				<Item>
					<HomeIcon />
					Home
				</Item>
				<Item>
					<ExploreIcon />
					Explore
				</Item>
				<Item>
					<SubscriptionsIcon />
					Subscriptions
				</Item>
				<Hr />
				<Item>
					<VideoLibraryIcon />
					Library
				</Item>
				<Item>
					<RestoreIcon />
					History
				</Item>
				<Hr />
				<Login>
					Sign in to like videos, comment and subscribe
					<Link
						to="signin"
						style={{ textDecoration: 'none' }}
					>
						<Button>
							<LockOpenIcon />
							Sign In
						</Button>
					</Link>
				</Login>
				<Hr />
				<Title>BEST OF MUKULEMBEZE</Title>
				<Item>
					<LibraryMusicIcon />
					Library
				</Item>
				<Item>
					<SportsBasketballIcon />
					Sports
				</Item>
				<Item>
					<SportsEsportsIcon />
					Gaming
				</Item>
				<Item>
					<LocalMoviesIcon />
					Movies
				</Item>
				<Item>
					<NewspaperIcon />
					News
				</Item>
				<Item>
					<LiveTvIcon />
					Live
				</Item>
				<Hr />
				<Item>
					<SettingsIcon />
					Settings
				</Item>

				<Item>
					<FlagIcon />
					Report
				</Item>

				<Item>
					<HelpOutlineIcon />
					Help
				</Item>

				<Item onClick={() => setdarkMode(!darkMode)}>
					<LightModeIcon />
					{darkMode ? 'Light' : 'Dark'} Mode
				</Item>
			</Wrapper>
		</Container>
	);
};
export default Menu;

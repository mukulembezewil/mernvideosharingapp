import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Video from './pages/Video.jsx';
import SignIn from './pages/SignIn';

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
	color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
	padding: 22px 96px;
`;

function App() {
	const [darkMode, setdarkMode] = useState(true);
	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<BrowserRouter>
					<Menu
						darkMode={darkMode}
						setdarkMode={setdarkMode}
					/>
					<Main>
						<Navbar />
						<Wrapper>
							<Routes>
								<Route path="/">
									<Route
										index
										element={<Home />}
									/>
									<Route
										path="signin"
										element={<SignIn />}
									/>
								</Route>
								<Route path="video">
									<Route
										path=":id"
										element={<Video />}
									/>
								</Route>
							</Routes>
						</Wrapper>
					</Main>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;

import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Auth from "./Pages/Auth";
import Booking from "./Pages/Booking";
import Appt from "./Pages/Appt";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./Pages/HomePage";
import AuthContext from "./context/auth-context";

function App() {
	const state = {
		token: null,
		userId: null,
	};

	const login = (token, userId, tokenExpiration) => {
		this.setState({ token: token, userId: userId });
	};

	const logout = () => {
		this.setState({ token: null, userId: null });
	};

	return (
		<Router>
			<React.Fragment>
				<AuthContext.Provider
					value={{
						token: this.state.token,
						userId: this.state.userId,
						login: this.login,
						logout: this.logout,
					}}>
					<Header />
					<main className='py-3'>
						<Container>
							<Switch>
								<Redirect from='/' to='/login' exact />
								<Route path='/' component={HomePage} exact />
								<Route path='/login' component={Auth} />
								<Route path='/appt' component={Appt} />
								<Route path='/booking' component={Booking} />
							</Switch>
						</Container>
					</main>
					<Footer />
				</AuthContext.Provider>
			</React.Fragment>
		</Router>
	);
}

export default App;

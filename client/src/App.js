import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from "react-router-dom";
import Auth from "./Pages/Auth";
import Booking from "./Pages/Booking";
import Home from "./Pages/Home";
import ApptDetail from "./Pages/ApptDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem("id_token");
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		});
	},
	uri: "graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<React.Fragment>
					<Header />
					<main className='py-3'>
						<Container>
							<Switch>
								<Redirect from='/' to='/login' exact />
								<Route path='/' component={Home} exact />
								<Route path='/login' component={Auth} />
								<Route path='/appt' component={ApptDetail} />
								<Route path='/booking' component={Booking} />
							</Switch>
						</Container>
					</main>
					<Footer />
				</React.Fragment>
			</Router>
		</ApolloProvider>
	);
}

export default App;

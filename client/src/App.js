import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Success from "./Pages/Success";
import Header from "./components/Header";
import OrderHistory from "./Pages/OrderHistory";

// replaced {storeProvider } with following:
import { Provider } from "react-redux";
// Import the Redux store you created
import store from "./utils/store";

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem("id_token");
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		});
	},
	uri: "/graphql",
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div>
					<Provider store={store}>
						<Header />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/signup' component={Signup} />
							<Route exact path='/orderHistory' component={OrderHistory} />
							<Route exact path='/products/:id' component={Detail} />
							<Route exact path='/success' component={Success} />
							<Route component={NoMatch} />
						</Switch>
					</Provider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;

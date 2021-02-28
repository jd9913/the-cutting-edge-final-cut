import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Header from "./components/Header";
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./components/ProtectedRoute";

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
							<Route exact path='/landing' component={LandingPage} />
							<Route exact path='/login' component={Login} />
							<Route exact path='/signup' component={Signup} />

							<ProtectedRoute exact={true} path='/' component={Home} />
							<ProtectedRoute
								exact={true}
								path='/orderHistory'
								component={OrderHistory}
							/>
							<ProtectedRoute
								exact={true}
								path='/styles/:id'
								component={Detail}
							/>
							<ProtectedRoute
								exact={true}
								path='/success'
								component={Success}
							/>
							<Route component={NoMatch} />
						</Switch>
					</Provider>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;

import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Compose from './pages/Compose';
import Admin from './pages/Admin';
import Details from './pages/Details';

const App: React.FC<AppProps> = () => {

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/compose">
						<Compose />
					</Route>
					<Route exact path="/details/:id">
						<Details />
					</Route>
					<Route exact path="/admin/:id">
						<Admin />
					</Route>
				</Switch>
			</Router>

		</>
	)
}

interface AppProps {

}

export default App;

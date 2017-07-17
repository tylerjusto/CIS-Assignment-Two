import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Events from './Events';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			headerMinimized: false
		};
	}

	minimizeHeader = () => {
		this.setState({
			headerMinimized: !this.state.headerMinimized
		});
	};

	render() {
		let {headerMinimized} = this.state;
		return (
			<BrowserRouter>
				<div>
					<div className={`App-hero ${headerMinimized ? 'minimized' : ''}`}>
						<header onClick={this.minimizeHeader}>
							<Link to="/"><h1>Tanning Oasis</h1></Link>
						</header>
						<nav>
							<Link to="/">Home</Link> |
							<Link to="/About">About</Link> |
							<Link to="/Events">Events</Link>
						</nav>
					</div>
					<Route path="/" exact component={Home}/>
					<Route path="/About" exact component={About}/>
					<Route path="/Events" exact component={Events}/>
				</div>
			</BrowserRouter>
		);
	}
}





export default App;

import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import './tanning.jpg';

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
						<a href="/"><h1>Tanning Oasis</h1></a>
					</header>
					<nav>
						<a href="/">Home</a> |
						<a href="/About">About</a> |
						<a href="/Events">Events</a></nav>
				</div>
				<Route path="/" exact component={Home}/>
				<Route path="/About" exact component={About}/>"
				<Route path="/Events" exact component={Events}/>
				</div>
			</BrowserRouter>
        );
    }
}
function Home(){
    return (
		<div>Home</div>
    );
    function About(){
        return (
			<div>About</div>
        );
        function Events(){
            return (
				<div>Events</div>
            );
        }
    }
export default App;

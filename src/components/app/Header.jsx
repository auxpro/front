// Import React Core
import React from 'react';

export default class Header extends React.Component {

	render() { return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button 
					  type="button" 
					  className="navbar-toggle" 
					  data-toggle="collapse" 
					  data-target="#navbar">
            			<span className="sr-only">Toggle navigation</span>
            			<span className="icon-bar"></span>
            			<span className="icon-bar"></span>
            			<span className="icon-bar"></span>
          			</button>
          			<a className="navbar-brand" href="#">AUXPRO</a>
        		</div>
				<div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><a href="#about">About</a></li>
            			<li><a href="#contact">Contact</a></li>
            			<li><a href="#contact">3rd</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);}
}

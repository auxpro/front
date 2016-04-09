// Import React Core
import React from 'react';

export default class Header extends React.Component {

	render() { return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            			<span class="sr-only">Toggle navigation</span>
            			<span class="icon-bar"></span>
            			<span class="icon-bar"></span>
          			</button>
          			<a class="navbar-brand" href="#">AUXPRO</a>
        		</div>
				<div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><a href="#about">About</a></li>
            			<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);}
}

// Import React Core
import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {

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
          			<Link to="/" className="navbar-brand">AUXPRO</Link>
        		</div>
				<div id="navbar" className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><Link to="/about">About</Link></li>
            			<li><Link to="/about">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);}
}

export default Header;

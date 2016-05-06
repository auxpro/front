// Import React Core
import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

class Header extends React.Component {

	render() { return (
		<header>
		<Navbar inverse fixedTop>
			<Navbar.Header>
				<Navbar.Brand>
					<LinkContainer to="/">
						<a>AuxPro</a>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle/>
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<LinkContainer to="/about">
						<NavItem eventKey={1}>About</NavItem>
					</LinkContainer>
					<LinkContainer to="/contact">
						<NavItem eventKey={2}>Contact</NavItem>
					</LinkContainer>
					<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
						<MenuItem eventKey={3.1}>Action</MenuItem>
						<MenuItem eventKey={3.2}>Another action</MenuItem>
						<MenuItem eventKey={3.3}>Something else here</MenuItem>
						<MenuItem divider />
						<MenuItem eventKey={3.3}>Separated link</MenuItem>
					</NavDropdown>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={4} href="#">Link Right</NavItem>
        			<NavItem eventKey={5} href="#">Link Right</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</header>
	);}
}

export default Header;

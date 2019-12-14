import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
	Collapse, 
	Navbar, 
	NavLink,
	NavbarToggler, 
	NavbarBrand, 
	Nav, 
	Container,
	NavItem } from 'reactstrap';

export default function Header(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="border-bottom fixed-top">
			<Navbar color="dark" dark expand="md">
				<Container>
					<NavbarBrand>
						<Link to="/">
							<NavLink>VIETCODE</NavLink>
						</Link>
					</NavbarBrand>

					<NavbarToggler onClick={toggle} />

					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem className="mx-4">
								<Link to="/">
									<NavLink>Home</NavLink>
								</Link>
							</NavItem>
							<NavItem className="mx-4">
								<Link to="/about">
									<NavLink>About</NavLink>
								</Link>
							</NavItem>
							<NavItem className="mx-4">
								<Link to="/events">
									<NavLink>Events</NavLink>
								</Link>
							</NavItem>
							<NavItem className="mx-4">
								<Link to="/posts">
									<NavLink>Posts</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	)
}
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	return (
		<header>
			<Navbar
				className='navbar navbar-expand-lg navbar-dark bg-primary'
				collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>The Cutting Edge</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/appt'>
								<Nav.Link>
									<i className='far fa-calendar-alt'> </i> Appointments
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/booking'>
								<Nav.Link>
									<i className='fas fa-cut'> </i> Booked Appointments
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>
									<i className='fas fa-user'> </i> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;

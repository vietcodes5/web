import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default function Header(props) {
	return (
		<nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Vietcode</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-4">
						<li className="nav-item">
							<NavLink className="nav-link" exact to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/events">Events</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/posts">News</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
import React from 'react';
import { Link } from 'react-router-dom';


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
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">About</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/events">Events</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/posts">News</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
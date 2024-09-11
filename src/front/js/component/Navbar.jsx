import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container-fluid">
				<Link to='/characters' className="navbar-brand" href="/">
				<img height="55" src="https://starwars.chocobar.net/star-wars-logo.png"></img>
				</Link>
				<form className="d-flex" role="search">
				<Link to='/characters'>
				<button className="btn btn-primary me-2">Characters</button>
				</Link>
					<input className="form-control me-2" type="search" placeholder="Search Characters" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};
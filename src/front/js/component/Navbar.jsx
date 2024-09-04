import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar bg-body-tertiary">
			<div class="container-fluid">
				<Link to='/contact' className="navbar-brand">Contact List</Link>
				<form class="d-flex" role="search">
					<input class="form-control me-2" type="search" placeholder="Buscar contacto" aria-label="Search" />
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};
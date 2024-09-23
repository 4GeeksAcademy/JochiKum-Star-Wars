import React from "react";
import { Link } from "react-router-dom";
import { BtnFavorites } from "../pages/BtnFavorites.jsx";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<Link to='/Inicio' className="navbar-brand" href="/">
					<img height="55" src="https://starwars.chocobar.net/star-wars-logo.png"></img>
				</Link>
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li>
							<Link to='/characters'>
								<button className="btn btn-warning me-2">Characters</button>
							</Link>
						</li>
						<li>
							<Link to='/planets'>
								<button className="btn btn-warning me-2">Planets</button>
							</Link>
						</li>
						<li>
							<Link to='/starships'>
								<button className="btn btn-warning me-2">Starships</button>
							</Link>
						</li>
						<li>
							<BtnFavorites />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
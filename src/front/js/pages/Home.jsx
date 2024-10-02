import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div class="login-form">
				<main>
					<h3>Login into account</h3>
					<div class="box-input">
						<i class="fa-regular fa-envelope"></i>
						<input type="text" placeholder="Email Address" />
					</div>
					<div class="box-input">
						<i class="fa-solid fa-key"></i>
						<input type="password" placeholder="Password" />
					</div>
					<label class="remember">
						<input type="checkbox" />
						Remember me
					</label>
					<button class="login-button">Login</button>
					<a href="recover-password.html" class="forgot">Forget password?</a>
					<p class="social-text">or login with</p>
					<div class="social-login">
						<a href="https://facebook.com" class="btn-facebook">
							<i class="fa-brands fa-facebook"></i>
							Facebook
						</a>
						<a href="https://google.com" class="btn-google">
							<i class="fa-brands fa-google"></i>
							Google
						</a>
						<a href="https://twitter.com" class="btn-twitter">
							<i class="fa-brands fa-twitter"></i>
							Twitter
						</a>
					</div>
					<hr />
					<p class="register-text">Don't have an account? <a href="register.html">Register here</a></p>
				</main>
			</div>
		</div>
	)
}

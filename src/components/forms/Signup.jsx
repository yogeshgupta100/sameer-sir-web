import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../contexts/TokenProvider";
import { useUser } from "../../contexts/UserProvider";

const Signup = () => {
	const navigate = useNavigate();
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();
	const confirmPasswordInputRef = useRef();

	const [token, setToken] = useToken();
	const [user, setUser] = useUser();

	const navigateSignin = () => {
		navigate("/signin");
	};

	const navigateSignup = () => {
		navigate("/signup");
	};

	const registerUser = async (e) => {
		e.preventDefault();

		const username = nameInputRef.current.value;
		const email = emailInputRef.current.value;
		const password = passwordInputRef.current.value;
		const confirmPassword = confirmPasswordInputRef.current.value;

		if (password !== confirmPassword) {
			alert("Password does not match!");
			return;
		}

		const response = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/auth/local/register`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				username,
				email,
				password,
			}),
		});

		const data = await response.json();

		console.log(data);

		if (data.hasOwnProperty("error")) {
			alert(data.error.message || "Something went wrong!");
			return;
		}

		setToken(data.jwt);
		setUser(data.user);

		navigate("/");
	};

	return (
		<>
			<div className="signin-body">
				<div className="signin-1">
					<span className="subscribe-logo" style={{ margin: "2.6rem 0 1rem 1rem" }}>
						<img src="/assets/logo_white.png" style={{width:"40%" , aspectRatio:"5.5/1.5" , objectFit:"cover"}}/>	
					</span>
					<div
						className="welcome-body"
						style={{ display: "grid", gridTemplateRows: "2fr 1fr", justifyItems: "center" }}
					>
						<span className="signup-image"></span>
						<div
							className="welcome-text"
							style={{
								width: "80%",
								textAlign: "center",
								alignItems: "center",
							}}
						>
							<h4 style={{ fontSize: "clamp(1rem , 1.66vw , 1.875rem)", color: "#F8E8FF" }}>
								Welcome Back!
							</h4>
							<p
								style={{
									fontSize: "clamp(0.88rem , 1vw , 1.2rem)",
									fontWeight: "300",
									color: "#F8E8FF",
									opacity: "0.8",
								}}
							>
								We're glad to see you again. Please log in to access your account and enjoy a seamless
								experience.
							</p>
						</div>
					</div>
					<div className="signup-btn" style={{ color: "#F8E8FF" , position:"relative"}}>
						<div
							className="buttons-signup"
							style={{
								width: "100%",
								position: "absolute",
								right: "-1rem",
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
								alignItems: "flex-end",
							}}
						>
							<button
								onClick={navigateSignin}
								className="signup-btn purple-btn"
								style={{ backgroundColor: "transparent", border: "none", margin: "0", fontSize:"clamp(1rem , 1.3vw , 1.6rem)", whiteSpace:"nowrap"}}
							>
								Sign in
							</button>
							<button
								onClick={navigateSignup}
								className="signin-btn btn"
								id="button"
								style={{ border: "none", paddingLeft: "1.5vw", backgroundColor: "#F8E8FF" , fontSize:"clamp(1rem , 1.3vw , 1.6rem)", whiteSpace:"nowrap" }}
							>
								Sign up
							</button>
						</div>
					</div>
				</div>
				<div className="signin-2" style={{ backgroundColor: "#F8E8FF" }}>
					<div className="signin-form-body">
						<div className="form-section" style={{ maxWidth: "100%", boxShadow: "none" }}>
							<form
								onSubmit={registerUser}
								style={{
									display: "flex",
									flexDirection: "column",
									width: "60%",
									fontFamily: "Raleway",
								}}
							>
								<input
									type="name"
									name="name"
									className="form-text"
									placeholder="Name"
									style={{ textDecoration: "none" }}
									ref={nameInputRef}
								/>
								<input
									type="email"
									name="email"
									className="form-text"
									placeholder="Email/Username"
									style={{ textDecoration: "none" }}
									ref={emailInputRef}
								/>
								<input
									type="password"
									name="password"
									className="form-text"
									placeholder="Password"
									style={{ textDecoration: "none" }}
									ref={passwordInputRef}
								/>
								<input
									type="password"
									name="confirm password"
									className="form-text"
									placeholder="Confirm Password"
									style={{ textDecoration: "none" }}
									ref={confirmPasswordInputRef}
								/>
								<div
									className="button-signin"
									style={{
										width: "100%",
										height: "100%",
										display: "flex",
										flexDirection: "column",
										alignItems: "end",
									}}
								>
									<button
										type="submit"
										className="purple-btn"
										style={{
											border: "none",
											width: "26%",
											fontSize: "clamp(0.9rem , 1.55vw , 1.25rem)",
											fontWeight: "700",
											whiteSpace:"nowrap"
										}}
									>
										Sign up
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Signup;

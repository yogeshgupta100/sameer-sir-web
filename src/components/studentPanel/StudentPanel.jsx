import React from "react";
import { useUser } from "../../contexts/UserProvider";
import { useToken } from "../../contexts/TokenProvider";
import { useNavigate } from "react-router-dom";
import StudentCourses from "./StudentCourses";

const StudentPanel = () => {
	const [token, setToken] = useToken();
	const [user, setUser] = useUser();
	const navigate = useNavigate();
	const userId = user && user.id;
	const userName = user && user.username;
	const userEmail = user && user.email;

	const handleLogout = () => {
		setToken(null);
		setUser(null);

		navigate("/");
	};

	return (
		<div>
			<div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
				{/* <nav
					className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
					id="navbarVertical"
				> */}
					{/* <div className="container-fluid"> */}
						{/* <div style={{ width: "100%", padding: "1vw", textAlign: "center" }}>
							<button
								className="navbar-toggler ms-n2"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#sidebarCollapse"
								aria-controls="sidebarCollapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<a className="navbar-brand" href="/" style={{ width: "80%" }}>
								<img src="/assets/logo.svg" alt="..." style={{ width: "80%" }} />
							</a>
						</div> */}
						{/* <div className="navbar-user d-lg-none">
							<div className="dropdown">
								<a
									href="#"
									id="sidebarAvatar"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div className="avatar-parent-child">
										<img
											alt="Image Placeholder"
											src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
											className="avatar avatar- rounded-circle"
										/>
										<span className="avatar-child avatar-badge bg-success"></span>
									</div>
								</a> */}
								{/* <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
									<a href="#" className="dropdown-item">
										Profile
									</a>
									<a href="#" className="dropdown-item">
										Settings
									</a>
									<hr className="dropdown-divider" />
									<button className="dropdown-item" onClick={handleLogout}>
										Logout
									</button>
								</div> */}
							{/* </div>
						</div> */}

						{/* <div className="collapse navbar-collapse" id="sidebarCollapse" style={{ marginTop: "1rem" }}> */}
									{/* <a className="nav-link" href="/panel">
										<i className="bi bi-house"></i> Dashboard
									</a> */}
							{/* <ul className="navbar-nav">
								<li className="nav-item active">
								</li> */}
								{/* <li className="nav-item">
									<a className="nav-link" href="#courses">
										<i className="bi bi-bookmarks"></i> Courses
									</a>
								</li> */}
							{/* </ul> */}
							{/* <hr className="navbar-divider my-5 opacity-20" />
							<div className="mt-auto"></div>
							<ul className="navbar-nav">
								<li className="nav-item">
									<button className="nav-link" onClick={handleLogout}>
										<i className="bi bi-box-arrow-left"></i> Logout
									</button>
								</li>
							</ul>
						</div> */}
					{/* </div> */}
				{/* </nav> */}
				<div className="h-screen flex-grow-1 overflow-y-lg-auto">
					<header className="bg-surface-primary border-bottom pt-6">
						<div className="container-fluid">
							<div className="mb-npx pt-1 pb-2" style={{display:"flex"}}>
                            <ul className="navbar-nav">
								<li className="nav-item active">
                            <a className="nav-link" href="/">
										<i className="bi bi-house"></i>
									</a>
								</li>
                                </ul>
								<div className="row align-items-center mb-5" style={{width:"100%" , display:"flex" , justifyContent:"center" , overflow:"hidden"}}>
									<div className="col-sm-6 col-12 mb-4 mb-sm-0" style={{width:"20%"}}>
                                        <a className="navbar-brand" href="/" style={{ width: "3rem" }}>
                                            <img src="/assets/logo.svg" alt="..." style={{ width: "100%" , height:"100%"}} />
                                        </a>
									</div>
								</div>
                                <ul className="navbar-nav">
								<li className="nav-item">
									<button className="nav-link d-flex gap-1" onClick={handleLogout}>
										<i className="bi bi-box-arrow-left"></i> Logout
									</button>
								</li>
							</ul>
							</div>
						</div>
					</header>
					<main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							<div className="row g-6 mb-6"></div>
							<div className="card shadow border-0 mb-7">
								<div className="card-header">
									<h5 className="mb-0" style={{fontSize:"clamp(1.5rem , 2vw , 3rem)"}}>Your Details</h5>
								</div>
								<div className="table-responsive">
									<table className="table table-hover table-nowrap">
										<thead className="thead-light">
											<tr>
												<th scope="col" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)"}}>id</th>
												<th scope="col" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)"}}>name</th>
												<th scope="col" style={{fontSize:"clamp(1rem , 1.2vw , 1.5rem)"}}>Email</th>
												<th></th>
												<th></th>
												<th></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td style={{fontSize:"clamp(0.8rem , 1vw , 1.5rem)"}}>
														<strong style={{opacity:"0.7"}}>{userId}</strong>
												</td>
												<td style={{fontSize:"clamp(0.8rem , 1vw , 1.5rem)"}}>{userName}</td>
												<td style={{fontSize:"clamp(0.8rem , 1vw , 1.5rem)"}}>
														{userEmail}
												</td>
												<td></td>
												<td></td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</main>
                    <main className="py-6 bg-surface-secondary">
						<div className="container-fluid">
							<div className="row g-6 mb-6"></div>
							<div className="card shadow border-0 mb-7">
								<div className="card-header d-flex justify-content-center">
									<h5 className="mb-0" style={{fontSize:"clamp(1.5rem , 2vw , 3rem)"}}>Ongoing Courses</h5>
								</div>
							</div>
								<div className="student-courses " style={{display:"grid" , gridTemplateColumns:"1fr 1fr 1fr"}}>
                                <StudentCourses/>
                                </div>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
};

export default StudentPanel;

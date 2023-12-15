import React , {useState} from "react"
import { useNavigate } from "react-router-dom";


const Signup = () => {
	const [phone, setPhone] = useState(null);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	const navigateSignin = () =>{
		navigate('/signin')
	};

	const navigateSignup = () =>{
		navigate('/signup')
	};

	// useEffect(() => {
	//     (async () => {
	//         const res = await fetch('http://localhost:1337/api/courses');
	//         const data = await res.json();
	//         setCourses(data.data);
	//     })();
	// }, [])

	return (
		<>
			<div className="signin-body">
				<div className="signin-1">
					<span className="subscribe-logo" style={{ margin: "2.6rem 0 0 1rem" }}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12vw"
							height="49"
							viewBox="0 0 188 49"
							fill="none"
						>
							<path
								d="M70.1071 43.9257H58.6719L61.9468 48.2114H73.5149L70.1071 43.9257Z"
								fill="#5B0A93"
							/>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M14.5606 2.74288H0.949219V48H14.5606C19.3835 48 23.3721 47.0286 26.5264 45.0857C29.7035 43.1429 32.0806 40.4686 33.6578 37.0629C35.2349 33.6572 36.0235 29.7486 36.0235 25.3372C36.0235 20.9486 35.2349 17.0514 33.6578 13.6457C32.0806 10.24 29.7035 7.57716 26.5264 5.65716C23.3721 3.7143 19.3835 2.74288 14.5606 2.74288ZM11.1664 38.9143V11.8286H13.6349C16.2178 11.8286 18.3664 12.4229 20.0806 13.6114C21.7949 14.8 23.0635 16.4229 23.8864 18.48C24.7321 20.5143 25.1549 22.8229 25.1549 25.4057C25.1549 27.9657 24.7206 30.2743 23.8521 32.3314C23.0064 34.3657 21.7378 35.9772 20.0464 37.1657C18.3549 38.3314 16.2178 38.9143 13.6349 38.9143H11.1664ZM81.3514 46.9372C83.7514 48.1943 86.4942 48.8229 89.5799 48.8229C92.6656 48.8229 95.3856 48.1943 97.7399 46.9372C100.094 45.6572 101.934 43.9086 103.26 41.6914C104.586 39.4514 105.248 36.8914 105.248 34.0114C105.248 31.1314 104.586 28.5714 103.26 26.3314C101.934 24.0686 100.094 22.2857 97.7399 20.9829C95.3856 19.68 92.6656 19.0286 89.5799 19.0286C86.4942 19.0286 83.7514 19.68 81.3514 20.9829C78.9742 22.2857 77.0999 24.0686 75.7285 26.3314C74.3799 28.5714 73.7056 31.1314 73.7056 34.0114C73.7056 36.8914 74.3799 39.4514 75.7285 41.6914C77.0999 43.9086 78.9742 45.6572 81.3514 46.9372ZM92.6656 39.4629C91.7971 39.9886 90.7685 40.2514 89.5799 40.2514C88.3914 40.2514 87.3514 39.9886 86.4599 39.4629C85.5914 38.9372 84.9056 38.1943 84.4028 37.2343C83.9228 36.2743 83.6828 35.1886 83.6828 33.9772C83.6828 32.7429 83.9228 31.6457 84.4028 30.6857C84.9056 29.7257 85.5914 28.9714 86.4599 28.4229C87.3514 27.8743 88.3914 27.6 89.5799 27.6C90.7685 27.6 91.7971 27.8743 92.6656 28.4229C93.5342 28.9714 94.2085 29.7257 94.6885 30.6857C95.1685 31.6457 95.4085 32.7429 95.4085 33.9772C95.4085 35.1886 95.1685 36.2743 94.6885 37.2343C94.2085 38.1943 93.5342 38.9372 92.6656 39.4629ZM108.581 48H119.038V0.822876H108.581V48ZM132.307 19.8514H121.164L132.993 48H145.198L156.993 19.8514H145.918L139.095 38.5372L132.307 19.8514ZM168.401 38.8114C167.83 38.0343 167.51 37.1429 167.441 36.1372H187.807C187.853 35.9543 187.875 35.5886 187.875 35.04C187.898 34.4914 187.91 34.1257 187.91 33.9429C187.91 30.6514 187.293 27.9086 186.058 25.7143C184.847 23.4972 183.11 21.8286 180.847 20.7086C178.607 19.5886 175.955 19.0286 172.893 19.0286C169.67 19.0286 166.915 19.68 164.63 20.9829C162.344 22.2629 160.595 24.0114 159.384 26.2286C158.195 28.4229 157.601 30.8914 157.601 33.6343C157.601 36.9029 158.298 39.6686 159.693 41.9314C161.087 44.1943 162.995 45.9086 165.418 47.0743C167.841 48.24 170.607 48.8229 173.715 48.8229C176.298 48.8229 178.435 48.64 180.127 48.2743C181.818 47.9086 183.178 47.44 184.207 46.8686C185.258 46.2743 186.07 45.6686 186.641 45.0514L182.595 38.6057C182.161 39.04 181.544 39.4629 180.744 39.8743C179.967 40.2857 179.041 40.6286 177.967 40.9029C176.915 41.1772 175.727 41.3143 174.401 41.3143C173.007 41.3143 171.795 41.0972 170.767 40.6629C169.761 40.2057 168.973 39.5886 168.401 38.8114ZM177.521 28.5257C177.887 29.2343 178.081 29.9543 178.104 30.6857H167.681C167.727 29.8857 167.955 29.1314 168.367 28.4229C168.778 27.7143 169.373 27.1429 170.15 26.7086C170.95 26.2514 171.921 26.0229 173.064 26.0229C174.207 26.0229 175.144 26.2629 175.875 26.7429C176.607 27.2 177.155 27.7943 177.521 28.5257ZM67.4259 40.7099L61.2294 32.88L71.6523 19.8514H61.0923L55.6408 27.0857L50.4294 19.8514H38.7723L49.5037 33.7029L37.5723 48H48.338L54.9894 39.3257L56.0508 40.7099H67.4259ZM69.9696 43.9242H58.5155L61.6408 48H73.1951L69.9696 43.9242Z"
								fill="#5B0A93"
							/>
						</svg>
					</span>
					<div
						className="welcome-body"
						style={{ display: "grid", gridTemplateRows: "2fr 1fr", justifyItems: "center" }}
					>
						<span className="signin-image"></span>
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
					<div style={{color:"#F8E8FF" , position:"relative"}}>
                    <div className="buttons" style={{width:"auto" , position:"absolute" , right:"-1rem" , display:"flex" , flexDirection:"column" , gap:"0.5rem" , alignItems:"flex-end"}}>
                    <button onClick={navigateSignin} className="signup-btn purple-btn" style={{backgroundColor:"transparent" , border:"none" , margin:"0"}}>Sign in</button>
                    <button onClick={navigateSignup} className="signin-btn btn" id="button" style={{border:"none" , paddingLeft:"1.5vw" , backgroundColor:"#F8E8FF"}}>Sign up</button>
                    </div>
                </div>
				</div>
				<div className="signin-2" style={{ backgroundColor: "#F8E8FF" }}>
					<div className="signin-form-body">
					<div className="form-section" style={{maxWidth:"100%" , boxShadow:"none"}}>
                            <form style={{display:"flex" , flexDirection:"column" , width:"60%" , fontFamily:"Raleway"}}>
                                <input type="name" name="name" className="form-text" placeholder="Name" style={{textDecoration:"none"}}/>
                                <input type="email" name="email" className="form-text" placeholder="Email/Username" style={{textDecoration:"none"}}/>
                                <input type="password" name="password" className="form-text" placeholder="Password" style={{textDecoration:"none"}}/>
                                <input type="password" name="confirm password" className="form-text" placeholder="Confirm Password" style={{textDecoration:"none"}}/>
                               <div className="button-signin" style={{
                                width:"100%",
                                height:"100%",
                                display:"flex",
                                flexDirection:"column",
                                alignItems:"end",
                               }}>
                               <button type="button" className="purple-btn" style={{border:"none" , width:"26%" , fontSize:"clamp(0.9rem , 1.55vw , 1.25rem)" , fontWeight:"700"}}>Sign up</button>
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

import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";

export default function DownloadSyllabus() {
	const [phone, setPhone] = useState(null);
	const [courses, setCourses] = useState([]);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	useEffect(() => {
		(async () => {
			const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses`);
			const data = await res.json();
			setCourses(data.data);
		})();
	}, []);

    const downloadSyllabus = async (e) => {
        e.preventDefault();

        const courseId = e.target.select.value;

        const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses/${courseId}?populate=*`);
        const data = await res.json();

        window.open(data.data.attributes.syllabus.data.attributes.url);
    };

	return (
		<>
			<div className="download-syll">
				<div className="logo-section">
					<span className="subscribe-logo" style={{ margin: "2.6rem 0 2rem 1rem"}}>
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
						className="logo-img"
						style={{
							width: "100%",
							aspectRatio: "5/4",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<img src="/assets/form-logo.png" alt="form-logo" style={{ width: "70%", height: "70%" }} />
					</div>
				</div>
				<div className="form-section">
					<div className="container" style={{ width: "80%", height: "80%" }}>
						<div className="top" style={{ display: "flex", width: "100%", position: "relative" }}>
							<div className="form-head" style={{lineHeight:"3"}}>
								<p
									style={{
										color: "#9844C5",
										fontFamily: "Open Sans",
										fontSize: "clamp(1rem , 1.66vw , 1.875rem)",
										fontStyle: "normal",
										fontWeight: "600",
										lineHeight: "0.777vw",
									}}
								>
									Download Syllabus
								</p>
								<p
									style={{
										color: "#B86CD2",
										fontFamily: "Open Sans",
										fontSize: "clamp(0.88rem , 1vw , 1.2rem)",
										fontWeight: "400",
										fontStyle: "normal",
									}}
								>
									Enter Your details to download the Course syllabus{" "}
								</p>
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="37"
								height="37"
								viewBox="0 0 37 37"
								fill="none"
								onClick={goBack}
								style={{ position: "absolute", right: "0", cursor: "pointer" }}
							>
								<circle cx="18.0723" cy="18.0723" r="17.5723" stroke="#B86CD2" />
								<g mask="url(#mask0_600_1947)"></g>
								<path d="M11.6484 11.6479L24.5907 24.5902" stroke="#9844C5" />
								<path d="M24.5898 11.6479L11.6476 24.5902" stroke="#9844C5" />
							</svg>
						</div>
						<div style={{ margin: "3.33vw 0" }}>
							<form
                                onSubmit={downloadSyllabus}
								style={{
									display: "flex",
									flexDirection: "column",
									fontFamily: "Raleway",
									fontSize: "clamp(1rem , 1.11vw , 3rem)",
								}}
							>
								<input type="text" name="name" className="form-text" placeholder="Your Name*" />
								<input
									type="email"
									name="email"
									className="form-text"
									placeholder="Enter Email Address*"
								/>
								<div className="phone">
									<PhoneInput
										country="us"
										className="form-text"
										value={phone}
										style={{
											margin: "2.22vw 0",
											color: "transparent",
										}}
										onChange={(phone) => setPhone(phone)}
									/>
								</div>
								<select
									className="form-text"
									style={{
										color: "#B86CD2",
										fontFamily: "Open Sans",
										fontSize: "clamp(1rem , 1.11vw , 3rem)",
										// padding: "0 0 1rem 0",
									}}
                                    name="select"
								>
									<option value={null} style={{ lineHeight: "1.66vw" , fontSize:"clamp(1rem , 1.11vw , 3rem)"}}>
										Select Courses
									</option>
									{courses &&
										courses.map((course) => (
											<option key={course.id} value={course.id} style={{fontSize:"clamp(1rem , 1.11vw , 3rem"}}>
												{course.attributes.name}
											</option>
										))}
								</select>
								{/* <input type="text" name="text" className='form-text' placeholder='Select Courses*'/> */}

								<div
									className="download-btn"
									style={{ width: "100%", display: "flex", justifyContent: "end" }}
								>
									<button
										type="submit"
										className="purple-btn"
										style={{
											border: "none",
											width: "auto",
											fontSize: "clamp(0.5rem , 1vw , 1rem)",
											fontWeight: "700",
										}}
									>
										Download Syllabus
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// export default DownloadSyllabus

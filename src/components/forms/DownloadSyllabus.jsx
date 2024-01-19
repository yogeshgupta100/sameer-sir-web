import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function DownloadSyllabus() {
    const [phone, setPhone] = useState(null);
    const [courses, setCourses] = useState([]);

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
            <div className="form-section" style={{ position: "fixed", top: "55%", left: "50%", transform: "translate(-50%, -50%)", width: "30%", aspectRatio: "2/2" , minHeight:"70%" , borderRadius:"0.9375rem"}}>
                <div className="container" style={{ width: "100%", height: "90%" }}>
                    <a href="/" className="top" style={{ display: "flex", width: "100%", position: "relative" }}>
                        <div className="form-head" style={{ lineHeight: "3" }}>
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
                            style={{ position: "absolute", right: "0", cursor: "pointer" }}
                        >
                            <circle cx="18.0723" cy="18.0723" r="17.5723" stroke="#B86CD2" />
                            <g mask="url(#mask0_600_1947)"></g>
                            <path d="M11.6484 11.6479L24.5907 24.5902" stroke="#9844C5" />
                            <path d="M24.5898 11.6479L11.6476 24.5902" stroke="#9844C5" />
                        </svg>
                    </a>
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
        </>
    );
}

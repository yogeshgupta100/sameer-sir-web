import { useState, useEffect } from "react";
import "react-phone-input-2/lib/style.css";
import Input from "./Input";
import Select from "./Select";
import "./SyllabusStyle.css"

export default function DownloadSyllabus({closeModal}) {
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
            <div className="form-section-syllabus">
                <div className="container">
                    <div className="top" style={{ display: "flex", width: "100%" , padding:"1.5vw 0 0"}}>
                        <div className="form-head">
                            <h3>
                            Start your journey now  
                            </h3>
                            <p>
                            Enter your details to move forward{" "}
                            </p>
                        </div>
                        <svg
                        onClick={closeModal}
                            xmlns="http://www.w3.org/2000/svg"
                            width="50"
                            height="50"
                            viewBox="0 0 37 37"
                            fill="none"
                            style={{ cursor: "pointer" }}
                        >
                            <g mask="url(#mask0_600_1947)"></g>
                            <path d="M11.6484 11.6479L24.5907 24.5902" stroke="#9844C5" />
                            <path d="M24.5898 11.6479L11.6476 24.5902" stroke="#9844C5" />
                        </svg>
                    </div>
                    <form onSubmit={downloadSyllabus} action="" className="form">
                    <Input label="Your name*" />
                    <Input label="Your email*" type="email" />
                    <Input label="Enter your number" type="number" />

                    <Select label="Select Course*" optionsValue={courses}/>
								<div
									className="download-btn"
									style={{ width: "100%", display: "flex", justifyContent: "end" }}
								>
									<button
										type="submit"
										className="purple-btn"
										style={{
											border: "none",
											width: "100%",
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
        </>
    );
}

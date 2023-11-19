import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useNavigate } from 'react-router-dom';



export default function DownloadSyllabus() {
    const [phone, setPhone] = useState(null);
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();
    const goBack = ()=>{
        navigate(-1);
    };

    useEffect(() => {
        (async () => {
            const res = await fetch(`${import.meta.env.VITE_STRAPI_SERVER_URL}/api/courses`);
            const data = await res.json();
            setCourses(data.data);
        })();
    }, [])
        
    return (
        <>
        <div className="download-syll">
            <div className="logo-section">
                <p className='logo'>LOGO</p>
                <div className="logo-img" style={{
                    width:"100%",
                    height:"60%",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                <img src='/assets/form-logo.png' alt='form-logo'/>
                </div>
            </div>
            <div className="form-section">
                <div className="container" style={{width:"80%" , height:"80%"}}>
                    <div className="top" style={{display:"flex" , width:"100%" , position:"relative"}}>
                        <div className="form-head">
                        <p style={{
                        color:"#9844C5",
                        fontFamily:"Open Sans",
                        fontSize:"1.5rem",
                        fontStyle:"normal",
                        fontWeight:"600",
                        lineHeight:"0.7rem"
                    }}>Download Syllabus</p>
                    <p style={{
                        color:"#B86CD2",
                        fontFamily:"Open Sans",
                        fontSize:"0.7rem",
                        fontWeight:"400",
                        fontStyle:"normal",
                    }}>Enter Your details to download the Course syllabus </p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none" onClick={goBack} style={{position:"absolute" , right:"0" , cursor:"pointer"}}>
  <circle cx="18.0723" cy="18.0723" r="17.5723" stroke="#B86CD2"/>
  <g mask="url(#mask0_600_1947)">
  </g>
  <path d="M11.6484 11.6479L24.5907 24.5902" stroke="#9844C5"/>
  <path d="M24.5898 11.6479L11.6476 24.5902" stroke="#9844C5"/>
</svg>
                    </div>
                <div style={{margin:"3rem 0"}}>
                <form>
                    {/* <label>
                        Your Name:
                    </label> */}
                        <input type="text" name="name" className='form-text' placeholder='Your Name*'/>
                        <input type="email" name="email" className='form-text' placeholder='Enter Email Address*'/>
                        <div className="phone">
                        <PhoneInput
                            country='us'
                            className='form-text'
                            value={phone}
                            style={{
                                margin:"2rem 0",
                                color:"transparent"
                            }}
                            onChange={phone => setPhone(phone)}
                        />
                        </div>
                        <select className="form-text" style={{color:"#B86CD2" , fontFamily:"Open Sans" , fontSize:"1.2rem" }}>
                            <option value={null} style={{lineHeight: "1.49513rem"}}>Select Courses</option>
                            {
                                courses && courses.map(course => (
                                    <option key={course.id} value={course.id}>{course.attributes.name}</option>
                                ))
                            }
                        </select>
                        {/* <input type="text" name="text" className='form-text' placeholder='Select Courses*'/> */}

                </form>
                <div className="download-btn" style={{width:"100%" , display:"flex" , justifyContent:"end"}}>
                <button className='purple-btn' style={{
                    border:"none",
                    width:"auto"
                }}>Download Course</button>
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
      )
}

// export default DownloadSyllabus
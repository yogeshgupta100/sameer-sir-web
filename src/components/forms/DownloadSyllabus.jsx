import { useState, useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



export default function DownloadSyllabus() {
    const [phone, setPhone] = useState(null);
    const [courses, setCourses] = useState([]);
        
    return (
        <>
        <div className="download-syll">
            <div className="logo-section">
                <p className='logo'>LOGO</p>
                <img src='/assets/form-logo.png' alt='form-logo' style={{justifyContent:"center"}}/>
            </div>
            <div className="form-section">
                <div className="container" style={{width:"80%" , height:"80%"}}>
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
                        <select className="form-text" style={{color:"#B86CD2" , fontFamily:"Open Sans" , fontSize:"1.2rem"}}>
                            {
                                courses.map(course => (
                                    <option value={course}>{course}</option>
                                ))
                            }
                        </select>
                        {/* <input type="text" name="text" className='form-text' placeholder='Select Courses*'/> */}

                </form>
                <button className='purple-btn' style={{
                    border:"none",
                    width:"auto",
                    display:"flex",
                    justifySelf:"end"
                }}>Download Course</button>
                </div>
                </div>
            </div>
        </div>
        </>
      )
}

// export default DownloadSyllabus
import React from 'react'
import Heading from '../aboutus/Heading'

const Howyoulearn = () => {
  return (
    <div className='container' style={{marginTop:"11.1vw"}}> 
    <Heading content={"How you learn"} left={"35%"} />
    <div className="mt-3" style={{
        width:"100%",
        display:"grid",
        gridTemplateColumns:"repeat(4,auto)",
        margin:"0 0 8.88vw",
        gap:"1.665vw",
    }}>
                <div className="justify-content-around">
                        <div className="howtolearn-card mt-3 py-0" style={{boxShadow: "0.138vw 0.138vw 1.38vw 0 rgba(0, 0, 0, 0.15)" , borderRadius:"0.8325vw 0.8325vw 0 0" , overflow:"hidden"}}>
                            <img src="/assets/how-you-learn-01.jpeg" className="card-img-top" alt='course1' style={{aspectRatio:"7/6"}}/>
                    <div className="container" style={{
                        padding:"1.11vw 1.665vw",
                        lineHeight:"1"
                    }}>
                        <p className="howtolearn-id">01.</p>
                        <div className="text"  style={{
                                display:"flex",
                                justifyContent:"space-between",
                                fontSize:"0.999vw",
                                lineHeight:"1",
                                marginLeft:"0"
                            }}>
                            <div className="howtolearn-content">
                                <h6>Interactive Assignments</h6>
                                <p>Hands-On Learning</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z" fill="white"/>
</svg>
                        </div>
                    </div>
</div>
                        </div> 
                        <div className="justify-content-around" >
                        <div className="my-3 px-0" style={{boxShadow: "0.138vw 0.138vw 1.38vw 0 rgba(0, 0, 0, 0.15)" , borderRadius:"0.8325vw 0.8325vw 0 0" , overflow:"hidden"}}>
                            <img src="/assets/how-you-learn-02.jpeg" className="card-img-top" alt='course1' style={{aspectRatio:"7/6"}}/>
                    <div className="card-body container" style={{
                        padding:"1.11vw 1.665vw",
                        lineHeight:"1"
                    }}>
                        <p className="howtolearn-id">02.</p>
                        <div className="text"  style={{
                                display:"flex",
                                justifyContent:"space-between",
                                fontSize:"0.999vw",
                                lineHeight:"1",
                                marginLeft:"0"
                            }}>
                            <div className="howtolearn-content">
                                <h6>Interactive Assignments</h6>
                                <p>Hands-On Learning</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z" fill="white"/>
</svg>
                        </div>
                        {/* <NavLink to={`../components/Home.jsx`} className='purple-btn' style={{
                            textDecoration:"none",
                        }}>Learn more</NavLink> */}
                    </div>
</div>
                        </div> 
                        <div className="justify-content-around" >
                        <div className="my-3 px-0" style={{boxShadow: "0.138vw 0.138vw 1.38vw 0 rgba(0, 0, 0, 0.15)" , borderRadius:"0.8325vw 0.8325vw 0 0" , overflow:"hidden"}}>
                            <img src="/assets/how-you-learn-03.jpeg" className="card-img-top" alt='course1' style={{aspectRatio:"7/6"}}/>
                    <div className="card-body container" style={{
                        padding:"1.11vw 1.665vw",
                        lineHeight:"1"
                    }}>
                        <p className="howtolearn-id">03.</p>
                        <div className="text"  style={{
                                display:"flex",
                                justifyContent:"space-between",
                                fontSize:"0.999vw",
                                lineHeight:"1",
                                marginLeft:"0"
                            }}>
                            <div className="howtolearn-content">
                                <h6>Interactive Assignments</h6>
                                <p>Hands-On Learning</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z" fill="white"/>
</svg>
                        </div>
                        {/* <NavLink to={`../components/Home.jsx`} className='purple-btn' style={{
                            textDecoration:"none",
                        }}>Learn more</NavLink> */}
                    </div>
</div>
                        </div>
                        <div className="justify-content-around" >
                        <div className="my-3 px-0" style={{boxShadow: "0.138vw 0.138vw 1.38vw 0 rgba(0, 0, 0, 0.15)" , borderRadius:"0.8325vw 0.8325vw 0 0" , overflow:"hidden"}}>
                            <img src="/assets/how-you-learn-04.jpeg" className="card-img-top" alt='course1' style={{aspectRatio:"7/6"}}/>
                    <div className="card-body container" style={{
                        padding:"1.11vw 1.665vw",
                        lineHeight:"1"
                    }}>
                        <p className="howtolearn-id">04.</p>
                        <div className="text"  style={{
                                display:"flex",
                                justifyContent:"space-between",
                                fontSize:"0.999vw",
                                lineHeight:"1",
                                marginLeft:"0"
                            }}>
                            <div className="howtolearn-content">
                                <h6>Interactive Assignments</h6>
                                <p>Hands-On Learning</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
  <circle cx="17.5" cy="17.5" r="17.5" fill="#B86CD2"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19944 13.3143C9.27071 13.2246 9.35767 13.1508 9.45535 13.0973C9.55303 13.0438 9.65952 13.0117 9.76872 13.0026C9.87792 12.9936 9.9877 13.0079 10.0918 13.0447C10.1959 13.0815 10.2922 13.1401 10.3753 13.2171L17.6129 19.9149L24.8504 13.2171C25.0192 13.0709 25.234 13.0012 25.4494 13.0228C25.6649 13.0445 25.8641 13.1557 26.0049 13.3331C26.1458 13.5104 26.2173 13.74 26.2043 13.9732C26.1912 14.2064 26.0947 14.4251 25.9352 14.5828L18.1552 21.7834C18.0042 21.9232 17.8118 22 17.6129 22C17.4139 22 17.2216 21.9232 17.0705 21.7834L9.29057 14.5828C9.12295 14.4275 9.01932 14.2066 9.00244 13.9687C8.98556 13.7309 9.05681 13.4955 9.20055 13.3143H9.19944Z" fill="white"/>
</svg>
                        </div>
                        {/* <NavLink to={`../components/Home.jsx`} className='purple-btn' style={{
                            textDecoration:"none",
                        }}>Learn more</NavLink> */}
                    </div>
</div>
                        </div> 
                    </div>
    </div>
  )
}

export default Howyoulearn
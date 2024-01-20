import React , {useState} from 'react'
import Header from '../Header'

const Hire = () => {
    const [showModal, setShowModal] = useState(false);
    const openSyllabusModal = () => {
		setShowModal(true);
    document.querySelector(".navbar").style.display = "none";
	};

	const closeSyllabusModal = () => {
		setShowModal(false);
    document.querySelector(".navbar").style.display = "block";
	};
  return (
    <>
    <Header/>
      <div className="landing-page" style={{
        backgroundImage:`url(${"assets/career-bg.jpeg"})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
      <div className="landing-page-content">
			<div className="centered-text" style={{width:"100%"}}>
				<h2 style={{
                    fontSize:"clamp(2rem , 5vw , 3.2rem)"
                }}>Want to Hire from us</h2>
				<p style={{
                    fontSize:"clamp(1rem , 2vw , 1.5rem)",
                }}>Hire talented designers from our community</p> 
				<div style={{display:"flex" , width:"70%" , justifyContent:"flex-start" , gap:"1rem"}}>
				<button type="button" onClick={openSyllabusModal} className="purple-button" id="button" style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.8rem , 1.5vw , 1.1rem)",
					fontWeight:"500",
					minWidth: "40%",
					aspectRatio: "11/2.7",
					padding:"1vw 1.5vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap",
                    outline:"none"
				}}>
				<span>
				Explore now
        </span>
				</button>
                {showModal && <DownloadSyllabusFormModal closeModal={closeSyllabusModal} onClose={closeSyllabusModal} form={"hire"}/>}
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Hire
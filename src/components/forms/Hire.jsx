import React , {useState} from 'react'
import Header from '../Header'
import DownloadSyllabusFormModal from './DownloadSyllabusFormModal';

const Hire = ({type}) => {
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
                }}>{type === "hire"?("Want to Hire from us"):("Want to Work with us")}</h2>
				<p style={{
                    fontSize:"clamp(1rem , 2vw , 1.5rem)",
                }}>{type === "hire"?("Hire talented designers from our community"):("Hire talented designers from our community")}</p> 
				<div style={{display:"flex" , width:"70%" , justifyContent:"flex-start" , gap:"1rem"}}>
				{/* <button type="button" onClick={openSyllabusModal} className="purple-button" id="button" style={{
					borderRadius: "12.32px",
					border: "0.104vw solid #FFF",
					fontSize:"clamp(0.8rem , 1.5vw , 1.1rem)",
					fontWeight:"500",
					minWidth: "40%",
					aspectRatio: "11/2.7",
					padding:"auto 1.5vw",
					margin:"2.22vw 0",
					whiteSpace:"nowrap",
          outline:"none",
          display:"flex",
          alignItems:"center"
				}}>
				<span>
				Explore now
        </span>
				</button> */}
        <button onClick={openSyllabusModal} type='btn' className='btn' id='button'
					style={{
						// color: "white",
						// backgroundColor: "#B46BD1",
						outline: "none",
						// border: "none",
						// fontSize: "0.971vw",
						padding: "1vw 1.33vw",
						// borderRadius: "0.555vw",
						// width: "fit-content",
					}}
				>
					Explore more
				</button>
                {showModal && <DownloadSyllabusFormModal closeModal={closeSyllabusModal} onClose={closeSyllabusModal} form={type}/>}
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Hire
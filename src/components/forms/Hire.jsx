import React , {useState} from 'react'
import Header from '../Header'
import DownloadSyllabusFormModal from './DownloadSyllabusFormModal';
import { useNavigate } from 'react-router-dom';

const Hire = ({type}) => {
  const navigate = useNavigate();
    const [showModal, setShowModal] = useState(true);
    // document.querySelector(".navbar").style.display = "none";
    const openSyllabusModal = () => {
		setShowModal(true);
	};

	const closeSyllabusModal = () => {
		setShowModal(false);
    navigate("/");
    // document.querySelector(".navbar").style.display = "block";
	};
  return (
    <>
    {/* <Header/> */}
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
        <button  type='btn' className='btn' id='button'
					style={{
						outline: "none",
						padding: "1vw 1.33vw",
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
import React, { useState } from 'react';

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <div className='signup-main'>
      <div className='signup-vector' style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								padding: "2px",
								fontSize: "1.2rem",
								background: "#fff",
								color: "white",
								borderRadius: "50%",
								height: "30px",
								width: "30px",
								cursor: "pointer"
							}}>
								<img src='/assets/Vector.png' />
							</div>
      <button
        type="button"
        className="button"
        id='button'
        style={{
          maxWidth:"100vw",
          borderRadius: "0.66vw",
          border: "0.076vw solid #B86CD2",
          margin:"0 1.11vw 0 0",
          fontWeight:"500",
          fontSize:"1.1544vw",
          aspectRatio:"4/2",
          padding:"0.4vw 1vw"
        }}
      >
        <p style={{fontSize:"1.154vw", margin:"0"}}>Contact us</p>
      </button>
    </div>

      <div
        className={`modal fade ${isModalOpen ? 'show' : ''}`}
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{ display: isModalOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-google me-2"></span> Sign in With Google
              </button>
              <button className="btn btn-primary w-100 mb-4">
                <span className="fa fa-facebook me-2"></span> Sign in With Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 mt-5"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

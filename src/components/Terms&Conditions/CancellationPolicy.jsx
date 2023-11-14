import Navbar from "../Navbar";
import Subscribe from "../aboutus/Subscribe";

export default function CancellationPolicy() {
  return (
    <>
      <Navbar />
      <div className="cancellation-policy"
        style={{
          padding: "120px 0",
          width: "60%",
          margin: "auto",
          textAlign: "justify",
          fontSize:"clamp(1rem,6vw,2rem)"
        }}
      >
        <h2 style={{ color: "#B46BD1" }}>Cancellation And Refund Policy</h2>
        {/* <h5 style={{ fontWeight: "normal", margin: "3rem 0 7rem" }}>
          Effective Date: 09/11/2023
        </h5> */}
        <p
          style={{
            margin: "3rem 0 7rem",
            fontFamily: "Open Sans",
            fontSize: "1.2rem",
            fontWeight: "400",
          }}
        >
          Welcome to Dxolve, where we are committed to providing a top-notch
          online learning experience in design. We understand that sometimes
          plans change, and we want to ensure that our users have a clear
          understanding of our cancellation and refund policy.
        </p>

        <h5>1. Cancellation Policy:</h5>
        <p style={{paddingRight:"6rem", fontSize:"1.2rem" , fontWeight:"400"}}>
          <ul>
            <li>Users have the right to cancel their enrollment in a course within [X]
          days from the date of purchase. After this period, no cancellations
          will be accepted. </li>
          <li>To initiate a cancellation, users must contact our
          customer support team at info@gmail.com with the subject line
          "Cancellation Request - [Course Name]." </li>
          <li>Upon cancellation, users will
          lose access to the course materials and any associated resources
          immediately.</li>
          </ul>
        </p>

        <h5 style={{ marginTop: "71px" }}>2. Refund Policy</h5>
        <p style={{paddingRight:"6rem", fontSize:"1.2rem" , fontWeight:"400"}}>
          <ul>
            <li>Full refunds will be issued for cancellations made within the stipulated [X] days from the date of purchase.</li>
            <li>No refunds will be provided for cancellations made after the specified time frame.</li>
            <li>Refund requests must be submitted via email to [support@email.com] with the subject line "Refund Request - [Course Name]."</li>
            <li>Refunds will be processed within [Y] business days from the date of the refund request approval.</li>
            <li>Refunds will be issued using the same payment method used for the original purchase.</li>
          </ul>
        </p>

        <h5 style={{ marginTop: "71px" }}>3. Course Access and Progress:</h5>
        <p style={{paddingRight:"6rem", fontSize:"1.2rem" , fontWeight:"400"}}>
          <ul>
            <li>Upon cancellation, users will lose access to the course content, including any completed or in-progress work.</li>
            <li>Users are encouraged to download any course materials they wish to keep before initiating a cancellation.</li>
          </ul>
        </p>

        <h5 style={{ marginTop: "71px" }}>4. Exceptions:</h5>
        <p style={{paddingRight:"6rem", fontSize:"1.2rem" , fontWeight:"400"}}>
          <ul>
            <li>In certain circumstances, exceptions to this policy may be considered at the sole discretion of [Your Company Name]. Such exceptions may include technical issues preventing course access or other extenuating circumstances.</li>
          </ul>
        </p>

        <h5 style={{ marginTop: "71px" }}>5. Contact Information:</h5>
        <p style={{paddingRight:"6rem", fontSize:"1.2rem" , fontWeight:"400"}}>
          <ul>
            <li>For any questions or concerns regarding our cancellation and refund policy, please contact our customer support team at [support@email.com] or [phone number].</li>
          </ul>
        </p>
        <p style={{marginTop:"5rem" , fontSize:"1.2rem" , fontWeight:"400"}}>Please review this policy carefully before making a purchase. By enrolling in our courses, you acknowledge that you have read, understood, and agreed to our cancellation and refund policy. [Your Website Name] reserves the right to update or modify this policy at any time, and users will be notified of any changes through our website.
Thank you for choosing [Your Website Name] for your online design education. We look forward to assisting you in your creative journey!</p>
      </div>
      <div style={{ marginTop: "-6rem" }}>
        <Subscribe />
      </div>
    </>
  );
}

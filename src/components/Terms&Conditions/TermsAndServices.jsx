import Navbar from "../Navbar";
import Subscribe from "../aboutus/Subscribe";

export default function TermsAndServices() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "8rem 0",
          width: "60%",
          margin: "auto",
          textAlign: "justify",
          fontFamily:"Open Sans",
          fontSize:"1.2rem"
        }}
      >
        <h2 style={{ color: "#B46BD1" }}>Terms and Services</h2>
        <h5 style={{ fontWeight: "600", margin: "3rem 0 4rem" }}>
          Effective Date: 09/11/2023
        </h5>
        <p>
          These Terms of Service ("TOS") govern your use of Dxolve, a platform
          dedicated to teaching design online. By accessing or using our
          Website, you agree to abide by these TOS. Please read these terms
          carefully as they outline the rules and guidelines for your use of the
          Service.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>1. Acceptance of Terms</h5>
        <p>
          By using Dxolve you confirm your understanding and acceptance of these
          TOS. If you do not agree with these terms, please refrain from using
          our Website.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>2. User Accounts</h5>

        <p>
          <strong>Registration:</strong> To access certain features and courses
          on our Website, you may be required to create a user account. You
          agree to provide accurate and complete information during the
          registration process. It is your responsibility to maintain the
          confidentiality of your account information and to notify us of any
          unauthorized access to your account.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>
          3. Content and Intellectual Property
        </h5>

        <p>
          <strong>Content Ownership:</strong> All content on Dxolve, including
          but not limited to text, images, videos, courses, and other materials,
          is protected by copyright and other intellectual property laws. You
          may only use this content for personal, non-commercial purposes and in
          compliance with these TOS.
        </p>
        <p>
          <strong>User-Generated Content:</strong> If you submit any
          user-generated content (e.g., comments, reviews, or projects), you
          grant us a non-exclusive, worldwide, royalty-free license to use,
          display, and distribute that content on our Website. You are
          responsible for the content you submit, and it should comply with our
          community guidelines.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>4. Prohibited Conduct</h5>
        <p>
          When using Dxolve you agree not to engage in any of the following
          activities:
        </p>
        <ol>
          <li>
            Violating Laws Do not use our Website for any illegal or
            unauthorized purposes.
          </li>
          <li>
            Infringement Do not infringe upon the intellectual property rights
            of others.
          </li>
          <li>
            Harmful Behaviour Do not engage in any behavior that may harm,
            harass, or disrupt others.
          </li>
          <li>
            Impersonation Do not misrepresent your identity or falsely claim an
            affiliation with Dxolve
          </li>
        </ol>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>5. Termination</h5>
        <p>
          We reserve the right to suspend or terminate your account, with or
          without notice, if you violate these TOS. You may also terminate your
          account at any time by following the appropriate procedures provided
          on our Website.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>6. Changes to TOS</h5>
        <p>
          We may update these TOS from time to time. It is your responsibility
          to review the TOS periodically. Your continued use of the Website
          after any changes constitutes your acceptance of the revised terms.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>7. Privacy</h5>
        <p>
          Your use of our Website is also subject to our Privacy Policy, which
          explains how we collect, use, and protect your personal information.
        </p>

        <h5 style={{ marginTop: "71px" , fontWeight:"700" , fontSize:"1.4rem"}}>8. Contact Us</h5>
        <p>
          If you have any questions or concerns about these TOS, please contact
          us at info@dxolve.com Thank you for choosing Dxolve to enhance your
          design skills. We look forward to providing you with valuable
          educational content and a supportive learning environment.
        </p>

        <p style={{
            marginTop:"4rem"
        }}>Dxolve</p>
        <p>info@dxolve.com</p>
        <p>087877808079</p>
        <p>Last Updated: <strong>18 Nov ,2023</strong></p>
      </div>
      <div style={{ marginTop: "-6rem" }}>
        <Subscribe />
      </div>
    </>
  );
}

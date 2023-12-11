import Navbar from "../Navbar";
import Subscribe from "../aboutus/Subscribe";
import styles from "./tnc.module.css";

export default function PrivacyPolicy() {
	return (
		<>
			<Navbar />
			<div
				className={styles.container}
				style={{
					padding: "8.96vw 0",
					maxWidth: "60vw",
					margin: "auto",
					textAlign: "justify",
				}}
			>
				<h2 style={{ color: "#B46BD1" , fontSize:"2.77vw"}}>Privacy and Policy</h2>
				<h5 style={{ margin: "3vw 0 6.77vw" , fontSize:"1.66vw"}}><strong>Effective Date: 09/11/2023</strong></h5>
				<p>
					Welcome to Dxolve. We are committed to protecting your privacy and ensuring the security of your
					personal information. This Privacy Policy outlines our practices concerning the collection, use, and
					disclosure of information when you visit our website to learn our courses online.
				</p>
				<p>
					Please read this Privacy Policy carefully to understand how we collect, use, and protect your
					personal information. By accessing or using our website, you consent to the practices described in
					this policy.
				</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>1. Information We Collect</strong></h5>
				<p>
					We may collect various types of information to provide you with a seamless and tailored learning
					experience. This information includes:
				</p>
				<p>
					<strong>a. Personal Information:</strong> When you create an account, enroll in courses, or contact
					us, we may collect personal information such as your name, email address, username, and password.
				</p>
				<p>
					<strong>b. Usage Information:</strong> We collect data about your interactions with our website,
					including the pages you visit, the courses you enroll in, your progress, and the duration of your
					visits.
				</p>
				<p>
					<strong>c. Device Information:</strong> We may automatically collect information about your device,
					such as your IP address, browser type, and operating system.
				</p>
				<p>
					<strong>d. Payment Information:</strong> If you make payments for courses, we may collect payment
					details, such as credit card information, to process transactions.
				</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>2. How We Use Your Information</strong></h5>
				<p>We use the collected information for various purposes, including:</p>

				<p>
					<strong>a. Providing Courses:</strong> We use your information to deliver courses, track your
					progress, and communicate with you about your learning journey.
				</p>

				<p>
					<strong>b. Account Management:</strong> We use your personal information for account creation,
					authentication, and account-related services.
				</p>

				<p>
					<strong>c. Customer Support:</strong> We may use your information to respond to your inquiries,
					comments, or requests for assistance .
				</p>
				<p>
					<strong>d. Marketing:</strong> With your consent, we may use your information to send you
					promotional and marketing communications related to our courses and services.
				</p>

				<p>
					<strong>e. Legal Compliance:</strong> We use your information to comply with legal obligations and
					to protect our rights and interests.
				</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>3. Disclosure of Your Information</strong></h5>
				<p>
					We do not sell or rent your personal information to third parties. However, we may share your
					information with:
				</p>

				<p>
					<strong>a. Service Providers:</strong> We may share your information with trusted third-party
					service providers who assist us in delivering our services, such as payment processors or hosting
					providers.
				</p>

				<p>
					<strong>b. Legal Obligations:</strong> We may disclose your information to comply with legal
					obligations or to protect our rights, privacy, safety, or property.
				</p>

				<p>
					<strong>c. Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a
					portion of our assets, your information may be transferred to the acquiring entity.
				</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>4. Your Choices</strong></h5>
				<p>You have certain choices regarding your personal information, including the ability to:</p>

				<p>
					a. Update, Correct, or Delete Your Information: You can access and edit your account information or
					request its deletion.
				</p>

				<p>b. Communications Preferences: You can opt out of receiving promotional communications from us.</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>5. Changes to this Privacy Policy</strong></h5>
				<p>
					We may update this Privacy Policy to reflect changes in our practices or for other operational,
					legal, or regulatory reasons. We will notify you of any significant changes by posting an updated
					version on our website.
				</p>

				<h5 style={{ marginTop: "4.92vw" , fontSize:"1.66vw"}}><strong>6. Contact Us</strong></h5>
				<p>
					If you have any questions, concerns, or requests regarding this Privacy Policy or your personal
					information, please contact us at <strong>info@dxolve.com</strong>
				</p>
				<p>
					Thank you for choosing <strong>Dxolve</strong> to learn design online. We are committed to providing
					you with high-quality education while safeguarding your privacy.
				</p>
			</div>
			<div style={{ marginTop: "-6.66vw" }}>
				<Subscribe />
			</div>
		</>
	);
}

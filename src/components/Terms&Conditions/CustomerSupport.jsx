import Navbar from "../Navbar";
import Subscribe from "../aboutus/Subscribe";

export default function CustomerSupport() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "5rem 0",
          width: "60%",
          margin: "auto",
          textAlign: "justify",
        }}
      >
        <h2 style={{ color: "#B46BD1" , lineHeight:"6rem"}}>Customer Support</h2>
        <p>
          Welcome to Dxolve Online Customer Support page! We are dedicated to
          ensuring your learning experience is smooth and enjoyable as you
          explore the world of design through our online courses. Our team of
          experts is here to assist you every step of the way, providing prompt
          and comprehensive support to address your queries and concerns.
        </p>
        <p>Here's how our Customer Support can assist you:</p>

        <h5 style={{ paddingTop: "71px" }}>1. Course Assistance:</h5>
        <p>
          Whether you're a beginner or an advanced learner, our team can guide
          you in choosing the right courses, understanding course content, and
          addressing any issues related to your lessons.
        </p>

        <h5 style={{ marginTop: "71px" }}>2. Technical Support:</h5>
        <p>We use the collected information for various purposes, including:</p>

        <p>
          If you encounter technical difficulties while accessing our platform,
          our support team is ready to help you troubleshoot and resolve any
          technical issues, ensuring you can focus on your design studies
          without interruptions.
        </p>

        <h5 style={{ marginTop: "71px" }}>3. Billing and Payments:</h5>
        <p>
          Have questions about subscriptions, payments, or billing? We're here
          to provide clarity and assist with any payment-related inquiries.
        </p>

        <h5 style={{ marginTop: "71px" }}>4. Account Assistance:</h5>
        <p>
          If you need assistance with your account, such as password resets,
          account settings, or profile updates, our support team is just a
          message away.
        </p>

        <h5 style={{ marginTop: "71px" }}>5. Feedback and Assistance:</h5>
        <p>
          We value your feedback and suggestions. Share your ideas, concerns,
          and recommendations with us to help us improve our platform
          continually.
        </p>

        <h5 style={{ marginTop: "71px" }}>6. FAQs and Resources:</h5>
        <p>
          Explore our Frequently Asked Questions (FAQs) and resources to find
          answers to common queries. If you can't find what you're looking for,
          our team is always ready to provide personalized assistance.
        </p>

        <h5 style={{ marginTop: "71px" }}>7. Contact Us:</h5>
        <p>
          Get in touch with our support team through the provided contact
          channels, whether it's through email, chat, or phone. We're here to
          help you during our designated support hours.
        </p>

        <p style={{
            marginTop:"6rem"
        }}>
          Join our design community and embark on your creative journey with
          confidence, knowing that our Customer Support team is dedicated to
          making your experience as enjoyable and informative as possible. Your
          success is our priority, and we're excited to assist you in reaching
          your design goals.
        </p>

      </div>
      <div style={{ marginTop: "-6rem" }}>
        <Subscribe />
      </div>
    </>
  );
}

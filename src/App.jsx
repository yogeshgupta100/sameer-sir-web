import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Course from "./components/courses/MainGraphic";
import DownloadSyllabus from "./components/forms/DownloadSyllabus";
import Articlemain from "./components/article/Articlemain";
import Mainresource from "./components/resources/Mainresource";
import SuccessPayment from "./components/SuccessPayment";
import CancelPayment from "./components/CancelPayment";
import PrivacyPolicy from "./components/Terms&Conditions/PrivacyPolicy";
import MainBlog from "./components/blogPage/MainBlog";
import CancellationPolicy from "./components/Terms&Conditions/CancellationPolicy";
import CustomerSupport from "./components/Terms&Conditions/CustomerSupport";
import TermsAndServices from "./components/Terms&Conditions/TermsAndServices";
import Signup from "./components/forms/Signup";
import Chatbot from "./utility/Chatbot/Chatbot";
import Signin from "./components/forms/Signin";
import TokenProvider from "./contexts/TokenProvider";
import UserProvider from "./contexts/UserProvider";
import MainTutorial from "./components/tutorials/MainTutorial";
import MainPanel from "./components/studentPanel/MainPanel";

function App() {
	return (
		<TokenProvider>
			<UserProvider>
				<Chatbot />
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route path="/about" element={<Aboutus />} />
						<Route path="/forms/downloadSyllabus" element={<DownloadSyllabus />} />
						<Route path="/article" element={<Articlemain />} />
						<Route path="/resource" element={<Mainresource />} />
						<Route path="/courses/:courseId" element={<Course />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/signin" element={<Signin />} />
						<Route path="/blogs" element={<MainBlog />} />
						<Route path="/panel" element={<MainPanel />} />
						<Route path="/tutorials" element={<MainTutorial />} />
						<Route path="/success" element={<SuccessPayment />} />
						<Route path="/cancel" element={<CancelPayment />} />
						<Route path="/tnc/customer-support" element={<CustomerSupport />} />
						<Route path="/tnc/terms-and-services" element={<TermsAndServices />} />
						<Route path="/tnc/privacy-policy" element={<PrivacyPolicy />} />
						<Route path="/tnc/cancellation-and-refund-policy" element={<CancellationPolicy />} />
					</Routes>
				</Router>
			</UserProvider>
		</TokenProvider>
	);
}

export default App;

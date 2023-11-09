import './App.css';
import Footer from './components/Footer'
import { BrowserRouter as Router, Navigate , Route, Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Home from './components/home/Home';
import Aboutus from './components/aboutus/Aboutus';
import Course from './components/courses/Graphic Design/MainGraphic';
import DownloadSyllabus from './components/forms/DownloadSyllabus';
import Articlemain from './components/article/Articlemain';
import Mainresource from './components/resources/Mainresource';
import PrivacyPolicy from './components/Terms&Conditions/PrivacyPolicy';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <Route  path="/" element={<Navigate to="/Home" />} /> */}
        <Route  path="/aboutus" element={<Aboutus />} />
        <Route path='/forms/downloadSyllabus' element={<DownloadSyllabus/>}/>
        <Route path='/article' element={<Articlemain/>}/>
        <Route path='/resource' element={<Mainresource/>}/>
        <Route path='/courses/:courseId' element={<Course/>}/>
        {/* <Route path='/success' element={<Articlemain/>}/>
        <Route path='/cancel' element={<Mainresource/>}/> */}
        <Route path='/tnc/customer-support' element={<PrivacyPolicy />} />
        <Route path='/tnc/terms-and-services' element={<PrivacyPolicy />} />
        <Route path='/tnc/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/tnc/cancellation-and-refund-policy' element={<PrivacyPolicy />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;


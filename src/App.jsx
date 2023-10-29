import './App.css';
import Footer from './components/Footer'
import { BrowserRouter as Router, Navigate , Route, Routes } from 'react-router-dom';
import Contact from './components/Contact'
import Home from './components/home/Home';
import Aboutus from './components/aboutus/Aboutus';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <Route  path="/" element={<Navigate to="/Home" />} /> */}
        <Route  path="/aboutus" element={<Aboutus />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;


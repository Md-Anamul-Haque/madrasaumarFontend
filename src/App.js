// import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/lib/ScrollToTop';
import Nav from './components/navigation/nav';
import About from "./pages/about";
import Books from './pages/Books';
import Contact from "./pages/contact";
import Donate from './pages/donate';
import FAQs from "./pages/FAQs";
import Home from "./pages/home";
import Islamic_story from "./pages/Islamic_story";
import NoPage from "./pages/NoPage";
import Notices from './pages/Notices';
import Runing_info from './pages/Runing_info';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  const [darkKey, setDarkKey] = useState(false);
  useEffect(() => {
    setDarkKey(localStorage.getItem('darkKey'));
    AOS.init({
      duration : 600
    });
  }, []);
  const toggleDarkMode=()=>{
    let tmpDarkValue=!darkKey;
    localStorage.setItem('darkKey', tmpDarkValue);
    setDarkKey(tmpDarkValue);
  }
  
  return (<div className={darkKey ? 'dark' : ''}>
  {/* <BrowserRouter> */}
          <Nav toggleDarkMode={toggleDarkMode}/>
          {/* <Navigate to="/admin" replace /> */}
          <ScrollToTop />

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Islamic-story" element={<Islamic_story />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/book" element={<Books />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/notice" element={<Notices />} />
              <Route path='/donate' element={<Donate />} />
              <Route path='/runing_info' element={<Runing_info />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        {/* </BrowserRouter> */}
        </div>
        );
}

export default App;

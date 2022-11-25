// import logo from './logo.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/lib/ScrollToTop';
import Nav from './components/navigation/nav';
import About from "./pages/about";
import AllOrjons from './pages/AllOrjons';
import Books from './pages/Books';
import Contact from "./pages/contact";
import Donate from './pages/donate';
import FAQs from "./pages/FAQs";
import Home from "./pages/home";
import Islamic_story from "./pages/Islamic_story";
import Login from './pages/Login';
import NoPage from "./pages/NoPage";
import Notices from './pages/Notices';
import Runing_info from './pages/Runing_info';
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  // const [darkKey, setDarkKey] = useState(false);
  // useEffect(() => {
  //   setDarkKey(localStorage.getItem('darkKey'));
  //   // AOS.init({
  //   //   duration : 600
  //   // });
  // }, []);
  // const toggleDarkMode=()=>{
  //   let tmpDarkValue=!darkKey;
  //   localStorage.setItem('darkKey', tmpDarkValue);
  //   setDarkKey(tmpDarkValue);
  // }
  
  return (<div className='antialiased text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-900'>
  {/* <BrowserRouter> */}
          <Nav />
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
              {/* <Route path='/contact/whatsApp' element={ } /> */}
              <Route path="/notice" element={<Notices />} />
              <Route path='/donate' element={<Donate />} />
              <Route path='/orjon' element={<AllOrjons />} />
              <Route path='/runing_info' element={<Runing_info />} />
              <Route path='/login' element={<Login />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        {/* </BrowserRouter> */}
        </div>
        );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
          <Routes>
              <Route path="admin/*" element={<Admin />} />
              <Route path="*" element={<App />} />
          </Routes>
      </BrowserRouter>
);
console.log(`%c

/////////////////////////////////////////
//             NoCrashSoft             //
/////////////////////////////////////////
`,'background:#3C4048; color:#fff; border-radius:2px;font-size: 1rem; font-weight: bold;');
reportWebVitals();

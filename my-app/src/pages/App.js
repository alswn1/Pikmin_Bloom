import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'; // Router 컴포넌트 추가
import '../css/App.css';
import Home from './Home.js';
import Pikmins from './Pikmins';
import Seedlings from './Seedlings';
import ScrollToTop from '../component/ScrollToTop';

function App() {
  const appLogoUrl = "https://lh3.googleusercontent.com/U5Jp2yTMY_iiDlObsDYWeTZDjeEpBynvXiSFYJQO5hIJXAddeXbpSwaw2eE4RHB4ZBqa7NXrrVcyLcCWCFwaKoX42qKYO_JOg1oIFl-loDHZ5zQ=rw-e365-w800";
  const appTitleBan = "/images/title_banner.png";

  return (
    <BrowserRouter>  {/* Router로 감싸기 */}
    <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <NavLink to="/">
            <img src={appLogoUrl} className="App-logo" alt="logo" />
          </NavLink>
          <div className='ban'>
            <img src={appTitleBan} className='App-banner'/>
            <div className='title_rec'>
              <div className='title'>Pikmin Bloom</div>
              <div className='subtitle'>guides and tips</div>
            </div>
          </div>
        </header>

        <div className='App-body'>
          <div className='nav'>
            <div className='links'>
              <NavLink to="/Pikmins" activeClassName="active">Pikmins</NavLink>
            </div>
            <div className='links'>
              <NavLink to="/Seedlings" activeClassName="active">Seedlings</NavLink>
            </div>

          </div>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/Pikmins" element={<Pikmins />} />
              <Route path="/Seedlings" element={<Seedlings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
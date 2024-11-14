import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'; // Router 컴포넌트 추가
import '../css/App.css';
import Pikmins from './Pikmins';

function App() {
  const appLogoUrl = "https://lh3.googleusercontent.com/U5Jp2yTMY_iiDlObsDYWeTZDjeEpBynvXiSFYJQO5hIJXAddeXbpSwaw2eE4RHB4ZBqa7NXrrVcyLcCWCFwaKoX42qKYO_JOg1oIFl-loDHZ5zQ=rw-e365-w800";
  const appTitleBan = "/images/title_banner.png";

  return (
    <BrowserRouter>  {/* Router로 감싸기 */}
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={appLogoUrl} className="App-logo" alt="logo" />
          </Link>
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
              <Link to="/Pikmins">Pikmins</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Seedlings</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Flowers</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Fruits</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Mushrooms</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Postcards</Link>
            </div>
            <div className='links'>
              <Link to="/Pikmins">Quests</Link>
            </div>

          </div>
          <div className='content'>
            <Routes>
              <Route path="/Pikmins" element={<Pikmins />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
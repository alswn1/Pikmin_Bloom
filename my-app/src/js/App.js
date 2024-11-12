import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes, Link } from 'react-router-dom';  // Router 컴포넌트 추가
import Pikmins from './Pikmins';
import '../css/App.css';

function App() {
  const appLogoUrl = "https://lh3.googleusercontent.com/U5Jp2yTMY_iiDlObsDYWeTZDjeEpBynvXiSFYJQO5hIJXAddeXbpSwaw2eE4RHB4ZBqa7NXrrVcyLcCWCFwaKoX42qKYO_JOg1oIFl-loDHZ5zQ=rw-e365-w800";

  return (
    <BrowserRouter>  {/* Router로 감싸기 */}
      <div className="App">
        <header className="App-header">
          <img src={appLogoUrl} className="App-logo" alt="logo" />
        </header>
        <div className='App-body'>
          <div className='links'>
            <Link to="/">HOME</Link>
            <Link to="/Pikmins">피크민</Link>
          </div>

          <Routes>
            <Route path="/Pikmins" element={<Pikmins />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
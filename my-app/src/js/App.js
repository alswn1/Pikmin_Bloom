import logo from '../logo.svg';
import '../css/App.css';

function App() {
  const appLogoUrl = "https://lh3.googleusercontent.com/U5Jp2yTMY_iiDlObsDYWeTZDjeEpBynvXiSFYJQO5hIJXAddeXbpSwaw2eE4RHB4ZBqa7NXrrVcyLcCWCFwaKoX42qKYO_JOg1oIFl-loDHZ5zQ=rw-e365-w800";

  return (
    <div className="App">
      <header className="App-header">
        <img src={appLogoUrl} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

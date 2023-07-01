import mobile from './logos/mobile_app.jpg';
import GooglePlay from './logos/GooglePlay.png';
import AppStore from './logos/AppStore.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={mobile} alt="Mobile Vector" />
      </div>
      <div className="text-container">
        <h1 className="title">Download the App</h1>
        <p className="description">
          Join the world's largest sports community, connecting millions of people to the sports they love.
        </p>
        <div className="buttons-container">
          <a href="https://play.google.com/store" className="buttons-container img">
            <img src={GooglePlay} alt="Google Play" />
          </a>
          <a href="https://www.apple.com/app-store/" className="buttons-container img">
            <img src={AppStore} alt="App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

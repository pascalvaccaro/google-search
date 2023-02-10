import loupe from './loupe.svg';
import micro from './micro.svg';
import camera from './camera.js';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="App-main">
        <h1>
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
        </h1>
        <div className="search">
          <span className="icon">
            <img src={loupe} alt="Loupe" />
          </span>
          <input type="text" />
          <span className="icon">
            <img src={micro} alt="Micro" />
          </span>
          <span className="icon">
            <img src={camera} width="20" height="20" alt="Camera" />
          </span>
        </div>
        <section className="App-actions">
          <button>Recherche Google</button>
          <button>J'ai de la chance</button>
        </section>
      </main>

      <footer className="App-footer">
        France
      </footer>
    </div>
  );
}

export default App;

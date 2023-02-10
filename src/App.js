import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://mail.google.com/mail/&ogbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gmail
        </a>
        <a
          className="App-link"
          href="https://www.google.fr/imghp?hl=fr&ogbl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Images
        </a>
      </header>

      <main className="App-main">
        <h1>
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
        </h1>
        <input type="text" />
        <section className="App-actions">
          <button>Recherche Google</button>
          <button>J'ai de la chance</button>
        </section>
      </main>

      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;

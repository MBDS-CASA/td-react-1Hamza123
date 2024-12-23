import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <header>
      <img src="https://emsi.ma/wp-content/uploads/2020/07/logo-1.png" alt="Logo de votre formation" style={{ maxWidth:'100%',height: 'auto' }} />
      <h1>Introduction à React</h1>
      <h2>A la découverte des premières notions de React</h2>
    </header>
  );
}
function MainContent() {
  return (
      <p>Ici, nous afficherons des informations intéressantes :)</p>
  );
}
function Footer({ Nom,Prenom }) {
  return (
    <footer style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>Tous droits réservés - {Nom} {Prenom}</p>
    </footer>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header/>
        <MainContent/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + MBDS</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer Nom="Rzama" Prenom="Hamza" />

    </>
  )
}

export default App

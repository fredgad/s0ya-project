import React from 'react';
import './App.css';
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main';
import Aside from './components/aside/Aside';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <aside>
        <Aside />
      </aside>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

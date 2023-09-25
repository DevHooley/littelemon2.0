import './App.css';
import Footer from './Footer.js';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;

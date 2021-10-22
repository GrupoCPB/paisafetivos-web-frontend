import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header/header';
import { Footer } from './components/Footer/footer';

import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

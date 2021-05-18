import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;

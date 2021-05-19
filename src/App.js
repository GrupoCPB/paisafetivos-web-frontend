import './App.css';
import { BrowserRouter } from 'react-router-dom';
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

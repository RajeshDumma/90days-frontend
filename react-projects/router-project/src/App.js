import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';


function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      
    </Routes>
    </Router>
    </BrowserRouter>
    </>
      
  );
}

export default App;

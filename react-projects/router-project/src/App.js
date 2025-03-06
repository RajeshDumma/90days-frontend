import './App.css';
import { Navbar } from './components/Folders/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Folders/Home';
import { About } from './components/Folders/About';
import { Dashboard } from './components/Folders/Dashboard';
import { Contact } from './components/Folders/Contact';
import Logo from './components/Folders/Logo';
import Discuss from './components/Folders/Discuss';
import './components/Folders/Navbar.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Logo />} /> {/* self closing tag */}
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} /> {/* In element palce you can use component also */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/discuss' element={<Discuss />}>
            <Route path='interview-question' element={<p>Interview Question</p>} />
            <Route path='interview-experience' element={<p>Interview Experience</p>} />
            <Route path='*' element={<p>Page Not Found</p>} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


import './App.css';
import Header from './components/Header/Header';
import './components/LoginForm/LoginForm.css';
import LoginForm from './components/LoginForm/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Router> {/* ✅ Correct Router Component */}
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

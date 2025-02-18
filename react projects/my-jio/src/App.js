import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Mobile from './components/Mobile/Mobile';
import True5g from './components/True5g/True5g';
import JioFiber from './components/JioFiber/JioFiber';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import JioHome from './components/JioHome/JioHome';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import './components/SignUp/SignUp.css'



function App() {

  const name = {
    userName: "Rajesh",
    age: 22,
    study: "Mtech"
  };
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/JioHome' element={<JioHome/>} ></Route>
        <Route path='/Mobile' element={<Mobile a = "6300908917" />}></Route>
        <Route path='/True5g' element={<True5g name={name}/>}></Route>
        <Route path='/JioFiber' element={<JioFiber/>}></Route>
        <Route path='Login' element= {<Login/>}></Route>
        <Route path='SignUp' element= {<SignUp/>}></Route>
      </Routes>
    </Router>
    
    </>
      
  );
}

export default App;

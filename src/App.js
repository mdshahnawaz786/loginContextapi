import { useContext } from 'react';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { myContext } from './Components/ContextApi';



function App() {
     const {isLoggedIn} = useContext(myContext)
    //  console.log(isLoggedIn);
  return (
    <div className="App">
      {/* <Navbar/>
      <Login/>
      <Home/> */}
      {isLoggedIn ? <div> <Navbar/> <Home/></div> : <Login/>}
    </div>
  );
}

export default App;

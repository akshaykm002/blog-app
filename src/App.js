import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Register from './Components/Register';
import Login from './Components/Login';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;

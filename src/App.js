import Navbar from './Navbar';
import RegisterForm from './Register_Form';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Log from './Log';

function App() {
  return (
   <div>
   <Navbar/>
   <Routes>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/log' element={<Log/>}/>
   </Routes>
   </div>
  );
}

export default App;

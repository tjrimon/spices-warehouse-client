import logo from './logo.svg';
import './App.css';
import Header from './components/CommonSection/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home'
import ManageItems from './components/Pages/ManageItems'
import Login from './components/Pages/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<ManageItems></ManageItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>

    </div>
  );
}

export default App;

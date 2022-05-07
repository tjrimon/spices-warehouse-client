import './App.css';
import Header from './components/CommonSection/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home'
import ManageInventory from './components/CommonSection/Inventory/ManageInventory'
import Login from './components/Pages/Login/Login';
import Footer from './components/CommonSection/Footer';
import Registration from './components/Pages/Login/Registration';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Blogs from './components/Pages/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:spicesID' element={
          <RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

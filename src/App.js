import './App.css';
import Header from './components/CommonSection/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home'
import EditInventory from './components/CommonSection/Inventory/EditInventory'
import AllInventory from './components/CommonSection/Inventory/AllInventory'
import Login from './components/Pages/Login/Login';
import Footer from './components/CommonSection/Footer';
import UpdateSpices from './components/CommonSection/Inventory/UpdateSpices'
import Registration from './components/Pages/Login/Registration';
import RequireAuth from './components/Pages/Login/RequireAuth';
import Blogs from './components/Pages/Blogs';
import AddInventory from './components/CommonSection/Inventory/AddInventory';
import MyItem from './components/CommonSection/Inventory/MyItem';
import NotFound from './components/Pages/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<AllInventory></AllInventory>}></Route>
        <Route path="/addinventory" element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path="/myinventory" element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:spicesID' element={
          <RequireAuth><EditInventory></EditInventory></RequireAuth>}></Route>
        <Route path='/inventory/update/:spicesID' element={
          <RequireAuth><UpdateSpices></UpdateSpices></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;

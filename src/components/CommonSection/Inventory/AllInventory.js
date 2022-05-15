import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import useInventoryItems from '../../../hooks/useInventoryItems';
import Loading from '../../Pages/Login/Loading';
const AllInventory = () => {
   const { inventoryItems, setInventoryItems, loading, setIsReload, isReload } = useInventoryItems();
   const navigate = useNavigate();
   const [user] = useAuthState(auth)
   const dynamicRoute = id => {
      navigate(`/inventory/${id}`)
   }
   const dynamicUpdateRoute = id => {
      navigate(`/inventory/update/${id}`)
   }

   const handleDelete = async id => {
      const proceed = window.confirm('Are you sure?');
      if (proceed) {
         try {
            await axios.delete(`https://calm-anchorage-79601.herokuapp.com/inventory/${id}`)
            setIsReload(!isReload)
            toast("Delete Successful")
         } catch (err) {

         }
      }

   }

   return (
      <div className='py-20 container mx-auto'>
         <div className=' pb-14 flex justify-around text-center items-center'>
            <h3 className='text-center text-3xl  uppercase font-semibold'>All Spices</h3>
            <button className='block  hover:bg-indigo-500 bg-orange-500 text-white py-3 px-6 rounded-full'><Link to='/addinventory'><FontAwesomeIcon icon="fa-solid fa-plus" /> Store Spices</Link></button>


         </div>
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {loading ? <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
               <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                     <th scope="col" className="px-6 py-3">
                        Spices name
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Image
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Product details
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Quantity
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Price
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Supplier
                     </th>
                     <th scope="col" className="px-6 py-3">
                        Manage
                     </th>
                  </tr>
               </thead>
               {inventoryItems.map(item =>
                  <tbody key={item._id}>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                           {item.name}
                        </td>
                        <td className="px-6 py-4">
                           <img width="70" src={item.img} alt='' />
                        </td>
                        <td className="px-6 py-4">
                           {item.description.slice(0, 15)}...
                        </td>
                        <td className="px-6 py-4">
                           {item.quantity}
                        </td>
                        <td className="px-6 py-4">
                           ${item.price}
                        </td>
                        <td className="px-6 py-4">
                           {item.supplierName}
                        </td>
                        <td className="px-6 py-4">
                           <div className='flex items-center'>
                              <button title='view' onClick={() => dynamicRoute(item._id)} className='mr-1 text-indigo-500 hover:text-orange-500 text-xl cursor-pointer'><FontAwesomeIcon icon="fa-solid fa-eye" /></button>
                              <button title='edit' onClick={() => dynamicUpdateRoute(item._id)} className='mr-1 text-indigo-500 hover:text-orange-500 text-lg'><Link to='inventory'><FontAwesomeIcon icon="fa-solid fa-pen" /></Link></button>
                              {user ? <button onClick={() => handleDelete(item._id)} title='delete' className='text-indigo-500 hover:text-orange-500 text-lg'><FontAwesomeIcon icon="fa-solid fa-trash" /></button> : ''}
                           </div>
                        </td>
                     </tr>
                  </tbody>
               )}
            </table>
               : <button className='text-center mx-auto flex justify-center items-center'> <Loading></Loading></button>}
         </div>
         <ToastContainer />

      </div>
   );
};
export default AllInventory;
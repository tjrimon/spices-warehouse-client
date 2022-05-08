import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInventoryItems from '../../../hooks/useInventoryItems';
import Loading from '../../Pages/Login/Loading';
const AllInventory = () => {
const {inventoryItems,loading}=useInventoryItems();
const navigate = useNavigate();
const dynamicRoute = id => {
    navigate(`/inventory/${id}`)
}
return (
<div className='py-20 container mx-auto'>
<div className=' pb-14 flex justify-around text-center items-center'>
<h3 className='text-center text-3xl  uppercase font-semibold'>All Spices</h3>
<button className='block  hover:bg-indigo-500 bg-orange-500 text-white py-3 px-6 rounded-full'><Link to='inventory'><FontAwesomeIcon icon="fa-solid fa-plus" /> Store Spices</Link></button>

   
</div>
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               <th scope="col" class="px-6 py-3">
                  Spices name
               </th>
               <th scope="col" class="px-6 py-3">
                  Image
               </th>
               <th scope="col" class="px-6 py-3">
                  Product details
               </th>
               <th scope="col" class="px-6 py-3">
                  Quantity
               </th>
               <th scope="col" class="px-6 py-3">
                  Price
               </th>
               <th scope="col" class="px-6 py-3">
                  Supplier 
               </th>
               <th scope="col" class="px-6 py-3">
                  Manage
               </th>
            </tr>
         </thead>
         <tbody>
            {loading ? <> {inventoryItems.map(item=><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                   {item.name}
                </th>
                <td class="px-6 py-4">
                    <img width="70" src= {item.img} alt=''/>
                </td>
                <td class="px-6 py-4">
                  {item.description.slice(0,15)}...
                </td>
                <td class="px-6 py-4">
                   {item.quantity}
                </td>
                <td class="px-6 py-4">
                  ${item.price}
                </td>
                <td class="px-6 py-4">
                   {item.supplierName}
                </td>
                <td class="px-6 py-4">
                <div className='flex items-center'>
                <button title='view' onClick={() => dynamicRoute(item.id)} className='mr-1 text-indigo-500 hover:text-orange-500 text-xl cursor-pointer'><FontAwesomeIcon icon="fa-solid fa-eye" /></button>
                <button title='edit' className='mr-1 text-indigo-500 hover:text-orange-500 text-lg'><Link to='inventory'><FontAwesomeIcon icon="fa-solid fa-pen" /></Link></button>
                <button title='delete' className='text-indigo-500 hover:text-orange-500 text-lg'><Link to='inventory'><FontAwesomeIcon icon="fa-solid fa-trash" /></Link></button>
                </div>


                </td>
             </tr>      
            )}    </> : <div className='text-center mx-auto flex justify-center items-center'> <Loading></Loading></div>}

         </tbody>
      </table>
   </div>
</div>
);
};
export default AllInventory;
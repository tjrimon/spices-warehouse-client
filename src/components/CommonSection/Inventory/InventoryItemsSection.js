import React from 'react';
import SingleInventory from './SingleInventory';
import Loading from '../../Pages/Login/Loading'
import useInventoryItems from '../../../hooks/useInventoryItems';

const InventoryItemsSection = () => {
    const {inventoryItems,loading}=useInventoryItems()

    return (
        <div>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 px-8 md:mx-0 gap-10 my-20'>
                {loading ? inventoryItems.map(item => <SingleInventory key={item.id} items={item}></SingleInventory>) : <Loading></Loading>}
            </div>
        </div>

    );
};

export default InventoryItemsSection;
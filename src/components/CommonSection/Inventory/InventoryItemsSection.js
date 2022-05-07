import React, { useEffect, useState } from 'react';
import SingleInventory from './SingleInventory';

const InventoryItemsSection = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventoryItems(data))

    }, [])

    return (
        <div className='container grid md:grid-cols-2 lg:grid-cols-3 px-8 md:mx-0 gap-10 my-20'>
            {inventoryItems.map(item => <SingleInventory key={item.id} items={item}></SingleInventory>)}
        </div>
    );
};

export default InventoryItemsSection;
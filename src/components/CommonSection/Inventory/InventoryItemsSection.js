import React, { useEffect, useState } from 'react';
import SingleInventory from './SingleInventory';
import Loading from '../../Pages/Login/Loading'
import axios from 'axios';

const InventoryItemsSection = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadData = async () => {
        try {
            const data = await axios.get('inventory.json')
                .then(data => setInventoryItems(data.data))
            setLoading(true)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div className='container grid md:grid-cols-2 lg:grid-cols-3 px-8 md:mx-0 gap-10 my-20'>
                {/* {inventoryItems.map(item => )} */}
                {loading ? inventoryItems.map(item => <SingleInventory key={item.id} items={item}></SingleInventory>) : <Loading></Loading>}

            </div>

        </div>

    );
};

export default InventoryItemsSection;
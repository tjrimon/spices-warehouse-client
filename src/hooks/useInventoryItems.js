import { useEffect, useState } from "react";

import React from 'react';
import axios from "axios";

const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadData = async () => {
        try {
            const data = await axios.get('https://calm-anchorage-79601.herokuapp.com/inventory')
                .then(data => setInventoryItems(data.data))
            setLoading(true)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        loadData()
    }, [])

    return {
        inventoryItems,
        setInventoryItems,
        loading
    }

};

export default useInventoryItems;


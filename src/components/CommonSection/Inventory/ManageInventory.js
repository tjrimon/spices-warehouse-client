import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const { spicesID } = useParams()
    const [spices, setSpices] = useState({});

    useEffect(() => {
        const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSpices(data));

    }, [spicesID]);
    return (
        <div>
            {spicesID}
            {spices.name}
        </div>
    );
};

export default ManageInventory;
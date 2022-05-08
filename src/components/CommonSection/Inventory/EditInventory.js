import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useViewSingleInventory from '../../../hooks/useViewSingleInventory';

const ManageInventory = () => {
    const { spicesID } = useParams()
    const [item] = useViewSingleInventory(spicesID);
    console.log(item)
    return (
        <div>
        <h2>You are about to book: {item.name}</h2>
    </div>
    );
};

export default ManageInventory;
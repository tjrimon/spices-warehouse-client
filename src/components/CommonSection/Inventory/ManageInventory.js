import React from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const { spicesID } = useParams()
    return (
        <div>
            {spicesID}
            inventory manage page
        </div>
    );
};

export default ManageInventory;
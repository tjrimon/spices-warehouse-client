import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../Pages/Login/Loading';
import 'react-toastify/dist/ReactToastify.css';

const ManageInventory = () => {
    const { spicesID } = useParams()
    const [spices, setSpices] = useState({});
    const { name, img, description, quantity, price, supplierName } = spices

    const [isReload, setIsReload] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSpices(data));
        setLoading(true)

    }, [isReload]);

    const handleDelivered = () => {
        const oldQuantity = parseInt(spices.quantity)
        const quantity = oldQuantity - 1

        const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
            .then(res => res.json())
            .then(result => {
                setIsReload(!isReload);
                toast('Spices Delivered')
            })
    }

    const handleUpdate = event => {
        event.preventDefault()
        const quantity = event.target.quantity.value

        if (!isNaN(quantity) && quantity >= 0) {
            const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ quantity })
            })
                .then(res => res.json())
                .then(result => {
                    setIsReload(!isReload);
                    toast('Quantity Updated')
                })
        } else {
            toast('Please Insert Valid Quantity')
        };
    }


    return (
        <div>
            {loading ? <><div className='container flex items-center mx-auto justify-center py-20'>
                <div className='w-[450px] text-center shadow-xl'>
                    <img src={img} alt="" />
                    <div className='py-10 px-5'>
                        <h1 className='font-semibold text-2xl pb-2'>{name}</h1>
                        <p className='py-2 text-[17px]'><span className='font-semibold'>Description:</span> {description}</p>
                        <p className='pb-2 text-[17px]'><span className='font-semibold'>Price:</span> {price}</p>
                        <p className='pb-2 text-[17px]'><span className='font-semibold'>Quantity:</span> {quantity}</p>
                        <p className='pb-3 text-[17px]'><span className='font-semibold'>Supplier:</span> {supplierName}</p>
                        <button className='text-center bg-indigo-400 py-2 px-3 rounded text-white' onClick={handleDelivered}>Delivered</button>
                    </div>
                </div>
            </div>
                <div className="flex justify-center items-center w-full pb-20">
                    <div className="w-2/3 bg-white rounded shadow-2xl p-8 m-4">
                        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Quantity</h1>
                        <form onSubmit={handleUpdate}>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="quantity">Quantity</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="quantity" id="quantity" />
                            </div>
                            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto py-2 px-4 rounded" type="submit">Submit</button>
                        </form>
                    </div>
                </div></> : <Loading></Loading>}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ManageInventory;
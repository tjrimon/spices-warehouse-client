import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = user.email
        const quantity = event.target.quantity.value
        const price = event.target.price.value
        let supplierNameValue = event.target.supplierName.value

        const supplierNameUpdate = supplierNameValue == '' ? user.displayName : supplierNameValue

        const img = event.target.img.value
        const description = event.target.description.value

        const url = `https://calm-anchorage-79601.herokuapp.com/add`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, quantity, price, email, supplierName: supplierNameUpdate, img, description })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        navigate(`/myinventory`)
        toast('Spices Added')
    };
    return (
        <div>
            <div className='container mx-auto py-28'>
                {/* <h3>Please Add Inventory Item</h3>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='mb-2' placeholder='Description' {...register("description")} />
                    <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                    <input type="submit" value="Add Service" />
                </form>
 */}

                <div className="flex justify-center items-center h-screen w-full ">
                    <div className="w-2/3 bg-white rounded shadow-2xl p-8 m-4">
                        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Spices</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="name" required>Spices Name</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="quantity">Quantity</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="quantity" id="quantity" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="price">Price</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="img">Image Link</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="img" id="img" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="img">Supplier Name</label>
                                <input placeholder={user.displayName} className="border py-2 px-3 text-grey-800" type="text" name="supplierName" id="supplierName" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="description">Description</label>
                                <textarea className="border py-2 px-3 text-grey-800" type="description" name="description" id="description" />
                            </div>
                            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddInventory;
import React from 'react';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://calm-anchorage-79601.herokuapp.com/add`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="name" required {...register("name", { required: true, maxLength: 20 })}>Spices Name</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="quantity">Quantity</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="quantity" id="quantity" {...register("quantity")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="price">Price</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" {...register("price")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="img">Image Link</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="img" id="img" {...register("img")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="img">Supplier Name</label>
                                <input className="border py-2 px-3 text-grey-800" type="text" name="supplierName" id="supplierName" {...register("supplierName")} />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="description">Description</label>
                                <textarea className="border py-2 px-3 text-grey-800" type="description" name="description" id="description" {...register("description")} />
                            </div>
                            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddInventory;
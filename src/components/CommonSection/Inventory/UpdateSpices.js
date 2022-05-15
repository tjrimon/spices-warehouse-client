import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const UpdateInventory = () => {
    const { spicesID } = useParams()
    const [spices, setSpices] = useState({});
    const { name, img, email, description, quantity, price, supplierName } = spices
    useEffect(() => {
        const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSpices(data));

    });

    const handleSubmit = event => {
        event.preventDefault()
        let nameValue = event.target.name.value
        let quantityValue = event.target.quantity.value
        let priceValue = event.target.price.value
        let supplierNameValue = event.target.supplierName.value
        let imgValue = event.target.img.value
        let descriptionValue = event.target.description.value


        const nameUpdate = nameValue == '' ? name : nameValue
        const quantityUpdate = quantityValue == '' ? quantity : quantityValue
        const priceUpdate = priceValue == '' ? price : priceValue
        const supplierNameUpdate = supplierNameValue == '' ? supplierName : supplierNameValue
        const imgUpdate = imgValue == '' ? img : imgValue
        const descriptionUpdate = descriptionValue == '' ? description : descriptionValue

        const url = `https://calm-anchorage-79601.herokuapp.com/inventory/${spicesID}`;
        if (!isNaN(quantity) && quantity >= 0) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameUpdate,
                    quantity: quantityUpdate,
                    price: priceUpdate,
                    email: email,
                    supplierName: supplierNameUpdate,
                    img: imgUpdate,
                    description: descriptionUpdate
                })
            })
                .then(res => res.json())
                .then(result => {

                })
            toast('Data Updated')
        } else {
            toast('Please insert valid quantity Number')
        }
    };
    return (
        <div>
            <div className='container mx-auto py-28'>
                <div className="flex justify-center items-center h-screen w-full ">
                    <div className="w-2/3 bg-white rounded shadow-2xl p-8 m-4">
                        <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Update Spices</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="name" >Spices Name</label>
                                <input placeholder={name} className="border py-2 px-3 text-grey-800" type="text" name="name" id="name" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="quantity">Quantity</label>
                                <input placeholder={quantity} className="border py-2 px-3 text-grey-800" type="text" name="quantity" id="quantity" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="price">Price</label>
                                <input placeholder={price} className="border py-2 px-3 text-grey-800" type="text" name="price" id="price" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="img">Image Link</label>
                                <input placeholder={img} className="border py-2 px-3 text-grey-800" type="text" name="img" id="img" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="supplierName">Supplier Name</label>
                                <input placeholder={supplierName} className="border py-2 px-3 text-grey-800" type="text" name="supplierName" id="supplierName" />
                            </div>
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 font-bold text-lg text-gray-900" for="description">Description</label>
                                <textarea placeholder={description} className="border py-2 px-3 text-grey-800" type="description" name="description" id="description" />
                            </div>
                            <button className="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default UpdateInventory;
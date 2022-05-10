import React from 'react';
import './Adduser.css';

const AddUser = () => {
    const handleAddRestoke = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const image = event.target.image.value;
        const discription = event.target.discription.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.name.value;
        const sold = event.target.name.value;
        const user = { name, image, discription, quantity, supplier, price, sold };
        fetch('https://morning-savannah-32688.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item added successfully')
                event.target.reset();
            })
    }
    return (
        <div>
            <h1 className='mt-2 text-success'>Please Add restoke.</h1>
            <form className='formm' onSubmit={handleAddRestoke}>
                <input type="text" name="name" placeholder='Name' required />
                
                <input type="text" name="image" placeholder='Image' required />
                
                <input type="text" name="discription" placeholder='Discription' required />
                
                <input type="text" name="quantity" placeholder='Quantity' required />
                
                <input type="text" name="supplier" placeholder='Supplier' required />
                
                <input type="text" name="price" placeholder='Price' required />
                
                <input type="text" name="sold" placeholder='Sold' required />
                
                <input type="submit" value="Restoke Hear" />
            </form>
        </div>
    );
};

export default AddUser;
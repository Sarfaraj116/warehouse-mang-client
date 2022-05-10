import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import image1 from '../Images/img-1.jpg'
import image2 from '../Images/img-2.jpg'
import image3 from '../Images/img-3.jpg'
import image4 from '../Images/img-4.jpg'
import image5 from '../Images/img-5.jpg'
import image6 from '../Images/img-6.jpg'
import './Inventory.css'

const Inventory = () => {
    const navigateProductDetails = event => {
        Navigate('/productdetails')
    }
    const navigate = useNavigate();
    const ManageInventory = () => {
        navigate('/manageinventory')
    }
    return (
        <div className='container'>
            <h2 className='title'>Inventory-Items</h2>
            <div class="row row-cols-1 row-cols-md-3 g-4 ms-5 me-5">
                <div class="col">
                    <div class="card">
                        <img src={image1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">BMW X7</h5>
                            <p class="discription">It has the powerful engine. People love this brand.</p>
                            <p class="quantity">Quantity:4</p>
                            <p class="suppliar">Supplier : BMW</p>
                            <p class="price">Price : $ 3000k</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">BMW X4</h5>
                            <p class="discription">It is reknown car in the world. It has comfort.</p>
                            <p class="quantity">Quantity:2</p>
                            <p class="suppliar">Supplier : BMW</p>
                            <p class="price">Price : $ 800K</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Audi R7</h5>
                            <p class="discription">Audi is known as the smart car in the world.</p>
                            <p class="quantity">Quantity:3</p>
                            <p class="suppliar">Supplier : Audi</p>
                            <p class="price">Price : $ 75k</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Audi</h5>
                            <p class="discription">It is reknown car in the world. It has comfort.</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : Audi</p>
                            <p class="price">Price : $ 440k</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image5} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">Aston Martin</h5>
                            <p class="discription">It is the pride of london. People of england love this car.It is alsothe most expensive car in UK.</p>
                            <p class="quantity">Quantity:9</p>
                            <p class="suppliar">Supplier : Aston Martin</p>
                            <p class="price">Price : $ 580k</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={image6} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="name">MacLarn</h5>
                            <p class="discription">It is the classy car and modified with color. it will cost a little heigh but looks good.</p>
                            <p class="quantity">Quantity:5</p>
                            <p class="suppliar">Supplier : MacLarn</p>
                            <p class="price">Price : $ 950k</p>
                            <Link to="/productdetails" className='Update-button' onClick={navigateProductDetails}>Update</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={ManageInventory} className='Manage-Inventory-btn-1'>Manage-Inventories</Button>
        </div >
    );
};

export default Inventory;
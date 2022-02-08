
import './App.css';
import React from 'react';
import ReactDOM from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Groceryimages() {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="galaxy.jpeg" className="d-block w-100" alt="groceryshopimages" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="groceryshopimages" />
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="groceryshopimages." />
                    </div>
                </div>
            </div>
        </>
    )
};
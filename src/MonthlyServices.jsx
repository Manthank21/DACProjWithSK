
import './App.css';
import { React } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import {Groceryimages} from './Groceryimages';
import backImgMserv from './skimg2.jpeg'

export default function MonthlyServices() {
    return (
        <>
            <span>
                <img src={backImgMserv} alt='Not Found' className='backImgMserv'></img>
            </span>
            <span className='div1Mserv'>
                <h1 className='mServheader'>You Can Subscribe To Following Monthly Services</h1>
                <br />
                <div className='labeldiv1'>
                    <label className='monthservice'>Milk</label>
                    <button type="button" class="btn btn-success servicebut1">Subscribe</button><br />
                    <label className='monthservice'>Car Washing</label>
                    <button type="button" class="btn btn-success servicebut2">Subscribe</button><br />
                    <label className='monthservice'>News Paper</label>
                    <button type="button" class="btn btn-success servicebut3">Subscribe</button><br />
                    <label className='monthservice'>Gym</label>
                    <button type="button" class="btn btn-success servicebut4">Subscribe</button><br />
                </div>

            </span>


        </>

    );
}

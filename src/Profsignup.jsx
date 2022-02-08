
import './App.css';
import { React } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


export default function Profsignup() {
    return (
        <>
        <div className='profmaindiv'>
        <div>
            <h2 id="profheading">Create Your Professional Account</h2>
        </div>
            <form className='profform1'>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label1 for="inputEmail4" >Owner Name</label1>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="OwnmerName" />
                    </div><br/>
                    <div class="form-group col-md-6">
                        <label1 for="inputEmail4">Email</label1>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div><br/>
                    <div class="form-group col-md-2">
                        <label1 for="inputMob">Mobile</label1>
                        <input type="tel" class="form-control" placeholder='Mobile Number' id="inputZip" style={{ width: 670 }} />
                    </div><br/>
                    <div class="form-group col-md-6">
                        <label1 for="inputPassword4">Password</label1>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                    </div><br/>
                </div>
                <div class="form-group">
                    <label1 for="inputAddress">Shop Address</label1>
                    <input type="text" class="form-control addinput" id="inputAddress" placeholder="Shopno, Building Name, Lane No, City" style={{ width: 670 }} />
                </div><br/>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label1 for="inputCity">City</label1>
                        <input placeholder='City Name' type="text" class="form-control" id="inputCity" />
                    </div><br/>
                    <div class="form-group col-md-4">
                        <label1 for="inputState">Category</label1>
                        <select id="inputState" class="form-control">
                            {/* <option selected></option> */}
                            <option>Electrician</option>
                            <option>Plumber</option>
                            <option>CarPenter</option>
                            <option>PestControl</option>
                            <option>Packers&Movers</option>
                            <option>Transport Service</option>
                            <option>HouseKeeping/Maid Service</option>
                            <option>GroceryShop</option>
                        </select>
                    </div><br/>
                </div>

                <form>
                    <div class="form-group">
                        <label1 for="exampleFormControlFile1">Upload Aadhar pdf :</label1>
                        <input aria-required type="file" class="form-control-file" id="exampleFormControlFile1" />
                    </div>
                </form><br/>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label1 class="form-check-label" for="gridCheck">
                            * Accept Terms and Conditions
                        </label1>
                    </div>
                </div><br/><br />
                <button type="submit" className="btn btn-primary profsigninbtn">Sign in</button>
            </form>
            </div>




        </>

    );
}

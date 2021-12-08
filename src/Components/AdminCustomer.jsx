import {React,useState} from 'react'
import AdminIndex from './AdminIndex'
import {app,db} from '../Firebase-config';
import './AdminProduct.css'
import { collection,addDoc } from '@firebase/firestore';


function AdminCustomer() {
    const userCollectionsRef = collection(db,"users");
    const [userdata,setUserdata] = useState({
        customerId:"",
        customerName:"",
        address:"",
        phoneNumber:"",
        password:"",
        gender:""
    })

    let Name,value;
    const getUserData = (event) =>{
        Name = event.target.name;
        value = event.target.value;
        setUserdata({...userdata,[Name]:value})
    }

    const addUser = async (e) => {
        if(userdata.customerId && userdata.customerName && userdata.address && userdata.phoneNumber && userdata.password && userdata.gender){
            await addDoc(userCollectionsRef,{
                customerId:userdata.customerId,
                customerName:userdata.customerName,
                address:userdata.address,
                phoneNumber:userdata.phoneNumber,
                password:userdata.password,
                gender:userdata.gender
            }).then(()=>{
                alert("User Added")
            })
        }
        else{
            alert("Fill all the details")
        }
        e.preventDefault();
    }

    const onSubmit = (e) =>{
        e.preventDefault();

    }
    return (
        <div>
        <AdminIndex/>
        <div className="BoDy">
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items Scrollbar" id="style-1">
                        <h3 style={{textAlign:"center"}}>Add Customer</h3>
                        <p style={{textAlign:"center"}}>Fill in the data below.</p>
                        <form className="requires-validation" onSubmit={onSubmit} novalidate>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="customerId" placeholder="Customer Id" value={userdata.customerId} onChange={getUserData} required/>
                                 <div className="valid-feedback">Id field is valid!</div>
                                 <div className="invalid-feedback">Id field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="customerName" placeholder="Customer Name" value={userdata.customerName} onChange={getUserData} required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                                 <input className="form-control" type="text" name="address" placeholder="Address" value={userdata.address} onChange={getUserData} required/>
                                 <div className="valid-feedback">Address field is valid!</div>
                                 <div className="invalid-feedback">Address field cannot be blank!</div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="text" name="phoneNumber" placeholder="Phone Number" value={userdata.phoneNumber} onChange={getUserData} required/>
                                <div className="valid-feedback">Phone number field is valid!</div>
                                <div className="invalid-feedback">Phone number field cannot be blank!</div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="password" name="password" placeholder="Password" value={userdata.password} onChange={getUserData} required/>
                                <div className="valid-feedback">Password field is valid!</div>
                                <div className="invalid-feedback">Password field cannot be blank!</div>
                            </div>


                            <div class="col-md-12 mt-3">
                                <label class="mb-3 mr-1" for="gender">Gender: </label>

                                <input type="radio" class="btn-check" name="gender" id="male" value="Male" onClick={getUserData} autocomplete="off" required/>
                                <label class="btn btn-sm btn-outline-secondary" for="male">Male</label>

                                <input type="radio" class="btn-check" name="gender" id="female" value="Female" onClick={getUserData}  autocomplete="off" required/>
                                <label class="btn btn-sm btn-outline-secondary" for="female">Female</label>

                                <input type="radio" class="btn-check" name="gender" id="secret" value="Secret"  onClick={getUserData}  autocomplete="off" required/>
                                <label class="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
                                <div class="valid-feedback mv-up">You selected a gender!</div>
                                    <div class="invalid-feedback mv-up">Please select a gender!</div>
                            </div>

                        <div className="form-check mt-3">
                          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                          <label className="form-check-label">I confirm that all data are correct</label>
                         <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                        </div>
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" onClick={addUser} className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default AdminCustomer

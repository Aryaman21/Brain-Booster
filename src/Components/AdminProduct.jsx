import {React,useState} from 'react'
import AdminIndex from './AdminIndex'
import {app,db} from '../Firebase-config';
import './AdminProduct.css'
import { collection,addDoc } from '@firebase/firestore';

function AdminProduct() {
    const [file1,setFile1] = useState("");
    const [file2,setFile2] = useState("");
    const onFileChange1 = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file).then(()=>{
            console.log("Upload File", file.name)
        })
        var x = await fileRef.getDownloadURL()
        setFile1(x);
        
    }
    const onFileChange2 = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file).then(()=>{
            console.log("Upload File", file.name)
        })
        var y = await fileRef.getDownloadURL()
        setFile2(y);
        
    }
    const productCollectionsRef = collection(db,"products");
    const [productdata,setProductdata] = useState({
        productId:"",
        productName:"",
        sellerName:"",
        productPrice:"",
        title:""
    })

    let Name,value;
    const getProductData = (event) =>{
        Name = event.target.name;
        value = event.target.value;
        setProductdata({...productdata,[Name]:value})
    }

    const addProduct = async (e) => {
        if(productdata.productId && productdata.productName && file1 && file2 && productdata.sellerName && productdata.productPrice && productdata.title){
            await addDoc(productCollectionsRef,{
                productId:productdata.productId, 
                productName:productdata.productName,
                file1Src:file1,
                file2Src:file2,
                sellerName:productdata.sellerName,
                productPrice:productdata.productPrice,
                title:productdata.title
            }).then(()=>{
                alert("Product Added");
                setProductdata({
                    productId:"",
                    productName:"",
                    sellerName:"",
                    productPrice:"",
                    title:""
                });
            })
        }
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
                        <h3 style={{textAlign:"center"}}>Add Product</h3>
                        <p style={{textAlign:"center"}}>Fill in the data below.</p>
                        <form className="requires-validation" onSubmit={onSubmit} novalidate>

                            <div className="col-md-12">
                                <input className="form-control" type="text" name="productId" placeholder="Product Id" value={productdata.productId} onChange={getProductData} required/>
                                 <div className="valid-feedback">Id field is valid!</div>
                                 <div className="invalid-feedback">Id field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="productName" placeholder="Product Name" value={productdata.productName} onChange={getProductData} required/>
                               <div className="valid-feedback">Username field is valid!</div>
                               <div className="invalid-feedback">Username field cannot be blank!</div>
                            </div>

                            <div className="col-md-12">
                               <input className="form-control" type="text" name="title" placeholder="Product Title" value={productdata.title} onChange={getProductData} required/>
                               <div className="valid-feedback">Product Title field is valid!</div>
                               <div className="invalid-feedback">Product Title field cannot be blank!</div>
                            </div>

                            <div className="col-md-12" style={{marginTop:"5px"}}>
                            <label for="file">Upload Image (1) :</label>
                            <input className="form-control" type="file" id = "file1" name="file1" placeholder="UPLOAD" onChange={onFileChange1}/>
                            </div>

                            <div className="col-md-12" style={{marginTop:"5px"}}>
                            <label for="file">Upload Image (2) :</label>
                            <input className="form-control" type="file" id = "file2" name="file2" placeholder="UPLOAD" onChange={onFileChange2}/>
                            </div>

                            <div className="col-md-12">
                                 <input className="form-control" type="text" name="sellerName" placeholder="Seller Name" value={productdata.sellerName} onChange={getProductData} required/>
                                 <div className="valid-feedback">Seller field is valid!</div>
                                 <div className="invalid-feedback">Seller field cannot be blank!</div>
                            </div>

                            <div className="col-md-12 mt-3">
                                <input className="form-control" type="number" name="productPrice" placeholder="Product Price" value={productdata.productPrice} onChange={getProductData} required/>
                                <div className="valid-feedback">Price field is valid!</div>
                                <div className="invalid-feedback">Price field cannot be blank!</div>
                            </div>


                        <div className="form-check mt-3">
                          <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                          <label className="form-check-label">I confirm that all data are correct</label>
                         <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                        </div>
                  

                            <div className="form-button mt-3">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={addProduct}>Register</button>
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

export default AdminProduct

import React,{useState} from 'react';
import './HomeCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { useHistory } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import {db} from '../Firebase-config';
import {doc, getDoc,updateDoc } from 'firebase/firestore'

function HomeCard({props,path,uid}) {
    const [cartData,setCartData] = useState([])
    var mydata = [];
    const addToCart = async (pid) =>{
        const userDoc = doc(db,"users",uid)
        const docSnap = await getDoc(userDoc);
        mydata = docSnap.data().cart;
        mydata.push(pid)
        const newFields = {cart:mydata}
        await updateDoc(userDoc,newFields)
    }
    return (
        <div class="col-md-12 col-sm-12" style={{padding:"0px 10px"}}>
            <div className="product-grid">
                <div className="product-image">
                    <Link to={path} className="image">
                        <img alt="abc" className="pic-1" src={props.file1Src}/>
                        <img alt="abc" className="pic-2" src={props.file2Src}/>
                    </Link>
                    <a href="/" className="product-like-icon"><i className="fa fa-heart"></i></a>
                    <ul className="product-links">
                        <li><a href="/"><i className="fa fa-heart"></i></a></li>
                        <li><a href="/"><i className="fa fa-random"></i></a></li>
                        <li><a href="/"><i className="fa fa-eye"></i></a></li>
                        <li><a style={{cursor:"pointer"}} onClick={() => {addToCart(props.pid)}}><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="product-content">
                    <h3 className="title"><a href="/">{props.productName}</a></h3>
                    <div className="price"> ₹ {props.productPrice}</div>
                </div>
            </div>
        </div>

    )
}

export default HomeCard

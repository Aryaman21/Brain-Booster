import React from 'react'
import './ProductList.css'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import { withRouter } from "react-router";
import SideBar from './SideBar';
import HomeNavbar from './HomeNavbar';
import Footer from './Footer';
import item2 from './item2.JPG'
import item1 from './item1.PNG'
import item3 from './item3.JPG'
import item4 from './item4.JPG'

const productpage = props =>{
    return(
        <div>
        <HomeNavbar Sticky="#"/>
        <SideBar/>
                <div className="product_body">
                    <div className="container py-3">
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-10">
                            <div className="row p-2 bg-white border rounded">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={item4}/></div>
                                <div className="col-md-6 mt-1">
                                    <h5>MuscleBlaze Whey Protein</h5>
                                    <div className="d-flex flex-row">
                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1"><span>100% natural</span><span className="dot"></span><span>High Quality</span><span className="dot"></span><span>Best finish<br/></span></div>
                                    <div className="mt-1 mb-1 spec-1"><span>C.O.D Available</span><span className="dot"></span>Health Booster<span></span><span className="dot"></span><span>Casual<br/></span></div>
                                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div className="d-flex flex-row align-items-center">
                                        <h4 className="mr-1">₹2500</h4><span className="strike-text">₹3500</span>
                                    </div>
                                    <h6 className="text-success">Free shipping</h6>
                                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                                </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={item3}/></div>
                                <div className="col-md-6 mt-1">
                                    <h5>MuscleBlaze Protein</h5>
                                    <div className="d-flex flex-row">
                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>310</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1"><span>100% natural</span><span className="dot"></span><span>High Quality</span><span className="dot"></span><span>Best finish<br/></span></div>
                                    <div className="mt-1 mb-1 spec-1"><span>C.O.D Available</span><span className="dot"></span><span>Health Booster</span><span className="dot"></span><span>Casual<br/></span></div>
                                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div className="d-flex flex-row align-items-center">
                                        <h4 className="mr-1">₹1800</h4><span className="strike-text">₹3000</span>
                                    </div>
                                    <h6 className="text-success">Free shipping</h6>
                                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                                </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={item1}/></div>
                                <div className="col-md-6 mt-1">
                                    <h5>MuscleBlaze Premium Protein</h5>
                                    <div className="d-flex flex-row">
                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>123</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1"><span>100% natural</span><span className="dot"></span><span>High Quality</span><span className="dot"></span><span>Best finish<br/></span></div>
                                    <div className="mt-1 mb-1 spec-1"><span>C.O.D Available</span><span className="dot"></span><span>Health Booster</span><span className="dot"></span><span>Casual<br/></span></div>
                                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div className="d-flex flex-row align-items-center">
                                        <h4 className="mr-1">₹2700</h4><span className="strike-text">₹3250</span>
                                    </div>
                                    <h6 className="text-success">Free shipping</h6>
                                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                                </div>
                            </div>
                            <div className="row p-2 bg-white border rounded mt-2">
                                <div className="col-md-3 mt-1"><img className="img-fluid img-responsive rounded product-image" src={item2}/></div>
                                <div className="col-md-6 mt-1">
                                    <h5>MuscleBlaze Isolate Protein</h5>
                                    <div className="d-flex flex-row">
                                        <div className="ratings mr-2"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><span>110</span>
                                    </div>
                                    <div className="mt-1 mb-1 spec-1"><span>100% natural</span><span className="dot"></span><span>High Quality</span><span className="dot"></span><span>Best finish<br/></span></div>
                                    <div className="mt-1 mb-1 spec-1"><span>C.O.D Available</span><span className="dot"></span><span>Health Booster</span><span className="dot"></span><span>Casual<br/></span></div>
                                    <p className="text-justify text-truncate para mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.<br/><br/></p>
                                </div>
                                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                                    <div className="d-flex flex-row align-items-center">
                                        <h4 className="mr-1">₹3000</h4><span className="strike-text">₹4000</span>
                                    </div>
                                    <h6 className="text-success">Free shipping</h6>
                                    <div className="d-flex flex-column mt-4"><button className="btn btn-primary btn-sm" type="button">Details</button><button className="btn btn-outline-primary btn-sm mt-2" type="button">Add to Cart</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        <Footer/>
            
        </div>
    );
};
const ProductList = withRouter(productpage);
export default ProductList

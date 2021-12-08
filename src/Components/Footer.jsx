import React from 'react';
import './Footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <footer>
        <div className="container">
            <div className="row">
            <div className="col-md-4 footer-column">
                <ul className="nav flex-column">
                <li className="nav-item" style={{marginBottom:"10px"}}>
                    <span className="footer-title">Product</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Product 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Product 2</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Plans & Prices</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Frequently asked questions</a>
                </li>
                </ul>
            </div>
            <div className="col-md-4 footer-column">
                <ul className="nav flex-column">
                <li className="nav-item" style={{marginBottom:"10px"}}>
                    <span className="footer-title">Company</span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Job postings</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News and articles</a>
                </li>
                </ul>
            </div>
            <div className="col-md-4 footer-column">
                <ul className="nav flex-column">
                <li className="nav-item" style={{marginBottom:"10px"}}>
                    <span className="footer-title">Contact & Support</span>
                </li>
                <li className="nav-item">
                    <span className="nav-link"><i className="fa fa-phone"></i><span style={{marginLeft:"5px"}}>+47 45 80 80 80</span></span>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-comments"></i><span style={{marginLeft:"5px"}}>Live chat</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-envelope"></i><span style={{marginLeft:"5px"}}>Contact us</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><i className="fa fa-star"></i><span style={{marginLeft:"5px"}}>Give feedback</span></a>
                </li>
                </ul>
            </div>
            </div>

            <div className="text-center"><i className="fa fa-ellipsis-h"></i></div>
            
            <div className="row text-center">
            <div className="col-md-4 box">
                <span className="copyright quick-links">Copyright &copy; Your Website <span id="year" style={{color:"white"}}>2021</span>
                </span>
            </div>
            <div className="col-md-4 box">
                <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-twitter"></i>
                </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-facebook"></i>
                </a>
                </li>
                <li className="list-inline-item">
                    <a href="#">
                    <i className="fa fa-linkedin"></i>
                </a>
                </li>
                </ul>
            </div>
            <div className="col-md-4 box">
                <ul className="list-inline quick-links">
                <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer

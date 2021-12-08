import React, {useState} from 'react'
import $ from 'jquery';
import './UserLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Redirect,useHistory } from 'react-router-dom';
import {db} from '../Firebase-config';
import { collection,addDoc,where,getDocs,query } from '@firebase/firestore';

function UserLogin() {

/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {

    'use strict';

    var usernameError = true,
        emailError    = true,
        passwordError = true,
        passConfirm   = true;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    $('input').focus(function () {

        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('input').blur(function () {

        // User Name
        if ($(this).hasClass('name')) {
            if ($(this).val().length === 0) {
                $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
                $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
                usernameError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                usernameError = false;
            }
        }
        // Email
        if ($(this).hasClass('email')) {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        // PassWord
        if ($(this).hasClass('pass')) {
            if ($(this).val().length < 8) {
                $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
                passwordError = true;
            } else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                passwordError = false;
            }
        }

        // PassWord confirmation
        if ($('.pass').val() !== $('.passConfirm').val()) {
            $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
            passConfirm = false;
        } else {
            $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            passConfirm = false;
        }

        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
        }
    });


    // Form submit
    $('form.signup-form').submit(function (event) {
        event.preventDefault();

        if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
            $('.name, .email, .pass, .passConfirm').blur();
        } else {
            $('.signup, .login').addClass('switched');

            setTimeout(function () { $('.signup, .login').hide(); }, 700);
            setTimeout(function () { $('.brand').addClass('active'); }, 300);
            setTimeout(function () { $('.heading').addClass('active'); }, 600);
            setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
            setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
            setTimeout(function () { $('.form').hide(); }, 700);
        }
    });

    // Reload page
    $('a.profile').on('click', function () {
        window.location.reload(true);
    });


});

    //----------------------------------------------------------------------------------------
    const userCollectionsRef = collection(db,"users");
    const history = useHistory();
    const [path,setPath] = useState("/");
    const [loginData,setLoginData] = useState({
        loginemail:"",
        loginPassword:""
    })
    let loginName,loginvalue;
    const getLoginData = (event) =>{
        loginName = event.target.name;
        loginvalue = event.target.value;
        setLoginData({...loginData,[loginName]:loginvalue})
    }

    const checkLoginData = async (e) => {
        e.preventDefault();
        console.log(loginData.loginemail + "\n" + loginData.loginPassword)
        if(loginData.loginemail && loginData.loginPassword){
            const q1 = query(userCollectionsRef, where('emailAddress','==',loginData.loginemail), where('password','==',loginData.loginPassword));
            const querySnapshot = await getDocs(q1);
            querySnapshot.forEach((doc) => {
                redirect("/home/"+doc.id)
                setPath("/home/"+doc.id)
            });
        }
    }

    function redirect(redirectPath){
        if(path!=="/"){
            history.push(redirectPath);
        }
        else{
            alert("Wrong Credentials !!")
        }
    }


    const [userdata,setUserdata] = useState({
        emailAddress:"",
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

    const postData = async (e) => {
        await addDoc(userCollectionsRef,{
            emailAddress:userdata.emailAddress,
            customerName:userdata.customerName,
            address:userdata.address,
            phoneNumber:userdata.phoneNumber,
            password:userdata.password,
            gender:userdata.gender,
            cart:[]
        }).then(()=>{
            alert("User Added")
        })
        e.preventDefault();
    }

    // const postData = async(e) =>{
    //     e.preventDefault();

    //     const {username,emailAdress,phone,address,password} = userdata;
    //     if((username && emailAdress && phone && address && password)){
    //         const res = await fetch(
    //             "https://reactbrainbooster-default-rtdb.firebaseio.com/signupform.json",
    //             {
    //                 method : "POST",
    //                 headers : {
    //                     "Content-Type" : "application/json",
    //                 },
    //                 body : JSON.stringify({
    //                     username,
    //                     emailAdress,
    //                     phone,
    //                     address,
    //                     password
    //                 }),
    //             }
    //         );
    //         if(res){
    //             setUserdata({
    //                 username:"",
    //                 emailAdress:"",
    //                 phone:"",
    //                 address:"",
    //                 password:""
    //             });
    
    //             alert("Data stored successfully");
    //         }
    //         else{
    //             alert("Please! fill all the details");
    //         }
    //     }
    // }

    return (
        <div className="Body">
            
<div className="Container">
<section id="formHolder">

   <div className="row">

      <div className="col-sm-6 brand">
         <a href="#" className="logo">MR <span>.</span></a>

         <div className="heading">
            <h3>BrainBooster</h3>
            <p>Your Right Choice</p>
         </div>

         <div className="success-msg">
            <p>Great! You are one of our members now</p>
            <a href="/UserLogin" className="profile">Sign-In</a>
         </div>
      </div>


      <div className="col-sm-6 form">


         <div className="login form-peice switched">
            <form className="login-form" onSubmit={checkLoginData}>
               <div className="form-group">
                  <label for="loginemail">Email Adderss</label>
                  <input type="email" name="loginemail" id="loginemail" value={loginData.loginemail} onChange={getLoginData} required/>
               </div>

               <div className="form-group">
                  <label for="loginPassword">Password</label>
                  <input type="password" name="loginPassword" id="loginPassword" value={loginData.loginPassword} onChange={getLoginData} required/>
               </div>

               <div className="CTA">
                  <input type="submit" value="Login" onClick={checkLoginData}/>
                  
                  <a href="#" className="switch">I'm New</a>
               </div>
            </form>
         </div>

         <div className="signup form-peice">
            <form className="signup-form" method="post">

               <div className="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" name="customerName" id="name" className="name" value={userdata.customerName} onChange={getUserData}/>
                  <span className="error"></span>
               </div>

               <div className="form-group">
                  <label for="email">Email Adderss</label>
                  <input type="email" name="emailAddress" id="email" className="email" value={userdata.emailAddress} onChange={getUserData}/>
                  <span className="error"></span>
               </div>

               <div className="form-group">
                  <label for="phone">Phone Number - <small>Optional</small></label>
                  <input type="text" name="phoneNumber" id="phone" value={userdata.phoneNumber} onChange={getUserData}/>
               </div>

               <div className="form-group">
                  <label for="address">Home Address</label>
                  <input type="text" name="address" id="address" value={userdata.address} onChange={getUserData}/>
               </div>

               <div className="form-group">
                  <label for="gender">Gender</label>
                  <input type="text" name="gender" id="gender" value={userdata.gender} onChange={getUserData}/>
               </div>
               

               <div className="form-group">
                  <label for="password">New Password</label>
                  <input type="password" name="password" id="password" className="pass" value={userdata.password} onChange={getUserData}/>
                  <span className="error"></span>
               </div>

               <div className="CTA" style={{marginBottom:"4px"}}>
                  <input type="submit" value="Signup Now" id="submit" onClick={postData}/>
                  <Link className="switch" >I have an account</Link>
               </div>
            </form>
         </div>
      </div>
   </div>

</section>


<footer>
   <p>
      <Link to="/">Best place to buy Brain Boosters</Link>
   </p>
</footer>

</div>

        </div>
    )
}

export default UserLogin

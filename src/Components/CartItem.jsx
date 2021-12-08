import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css';

function CartItem({props}) {
    useEffect(()=>{
        function card_format(value) {
            var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
            var matches = v.match(/\d{4,16}/g);
            var match = (matches && matches[0]) || "";
            var parts = [];
            for (var i = 0, len = match.length; i < len; i += 4) {
              parts.push(match.substring(i, i + 4));
            }
            if (parts.length) {
              return parts.join(" ");
            } else {
              return value;
            }
          }
          
          document.getElementById("card_number").oninput = function () {
            this.value = card_format(this.value);
          };
          
          function ex_format(value) {
            var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
            var matches = v.match(/\d{2,4}/g);
            var match = (matches && matches[0]) || "";
            var parts = [];
            for (var i = 0, len = match.length; i < len; i += 2) {
              parts.push(match.substring(i, i + 2));
            }
            if (parts.length) {
              return parts.join(" / ");
            } else {
              return value;
            }
          }
          
          document.getElementById("card_date").oninput = function () {
            this.value = ex_format(this.value);
          };
          
          function checkDigit(event) {
            var code = event.which ? event.which : event.keyCode;
          
            if ((code < 48 || code > 57) && code > 31) {
              return false;
            }
          
            return true;
          }
          
    },[])
    return (
        <div>
        <div className="tr_item">
            <div className="td_item item_img">
            <img src={props.file1Src} />
            </div>
            <div className="td_item item_name">
            <label className="main">{props.productName}</label>
            <label className="sub">Ref. 007891987</label>
            </div>
            <div className="td_item item_color">
            <label>{props.sellerName}</label>
            </div>
            <div className="td_item item_qty">
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="more">More</option>
            </select>
            </div>
            <div className="td_item item_price">
            <label> ₹{props.productPrice}</label>
            </div>
            <div className="td_item item_remove">
            <span className="material-icons-outlined">close</span>
            </div>
        </div>
        </div>
    )
}

export default CartItem

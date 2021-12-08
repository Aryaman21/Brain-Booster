import React,{useState,useEffect} from 'react'
import './ItemPage.css';
import ImageGallery from 'react-image-gallery';
import HomeNavbar from './HomeNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import CardCarousel from './CardCarousel';
import 'font-awesome/css/font-awesome.min.css';
import item1vo from "./item1vo.JPG";
import {db} from '../Firebase-config';
import {collection,getDocs,doc, getDoc } from 'firebase/firestore'

function ItemPage() {
    // const images = [
    //     {
    //       original: item1vo,
    //       thumbnail: item1vo,
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1015/1000/600/',
    //       thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //       original: 'https://picsum.photos/id/1019/1000/600/',
    //       thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    //   ];
    const [image,setImage] = useState([]);
    const itemCollectionRef = collection(db,"itemPage");
    const [itemData,setItemData] = useState([]);
    const productCollectionRef = collection(db,"products");
    useEffect(()=>{
      const getproduct =  async () => {
          const data = await getDocs(productCollectionRef);
          setItemData(data.docs.map((doc)=>({...doc.data(),pid:doc.id})));
      }
      getproduct();
    },[])
    useEffect(()=>{
      const getItems = async () =>{
        const snap = await getDoc(doc(db, 'itemPage', 'OpCLKrvU7IgstV7GEgml'));
        if (snap.exists()) {
          var data = snap.data();
          setImage(data.images)
        }
        else {
          console.log("No such document")
        }
      }
      getItems();
    },[])
    return (
        <div id="iteminfo">
            <HomeNavbar Sticky="top"/>
            <div className="container" style={{marginTop:"15px"}}>
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-8">
                    <ImageGallery items={image} thumbnailPosition="bottom" showBullets="true"/>
                </div>
                <div class="col-12 col-md-4" style={{display:"flex",flexDirection:"column"}}>
                    <div><h3>MuscleBlaze Biozyme Whey Protein, 4.4 lb, Rich Milk Chocolate</h3></div>
                    <div><ul class="list-inline small">
                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                    <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
                    <li class="list-inline-item m-0"><i class="fa fa-star-o text-gray"></i></li>
                  </ul></div>
                  <div style={{backgroundColor:"red",borderRadius:"2px",width:"max-content",padding:"1px 4px"}}><span style={{fontWeight:"bolder",color:"white"}}>20% Off</span></div>
                  
                  <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                    <div style={{color:"gray"}}><span style={{fontSize:"23px"}}>₹2500</span></div>
                    <div style={{color:"red",marginLeft:"5px"}}><strike>₹3500</strike></div>
                  </div>

                  <div style={{backgroundColor:"#f0f0f0",marginTop:"20px",paddingTop:"10px"}}><ul>
                    <li>Free Shipping</li>
                    <li>Cash on Delivery Available</li>
                    <li>14 Days Return</li>
                  </ul></div>

                  <div style={{display:"flex",flexDirection:"row",marginTop:"30px",alignItems:"center",justifyContent:"center"}}>
                    <button className="btn btn-success"><span style={{fontWeight:"bold"}}><i class="fa fa-shopping-cart"></i><span style={{marginLeft:"5px"}}>Add to Cart</span></span></button>
                    <button className="btn btn-info" style={{marginLeft:"20px",backgroundColor:"orange"}}><span style={{fontWeight:"bold"}}><i class="fa fa-shopping-bag"></i><span style={{marginLeft:"5px"}}>Buy Now</span></span></button>
                  </div>
                </div>
            </div>
            </div>
            <hr/>
            <CardCarousel data={itemData} title="Similar Products"/>
            <Footer/>
        </div>
    )
}

export default ItemPage

import React, { useEffect,useState } from 'react';
import ControlledCarousel from './ControlledCarousel';
import Footer from './Footer';
import { useParams } from 'react-router';
import CardCarousel from './CardCarousel';
import HomeNavbar from './HomeNavbar';
import {db} from '../Firebase-config';
import {collection,getDocs,doc, getDoc } from 'firebase/firestore'


function HomePg() {
    let {uid} = useParams();
    var x = uid;
    var path = "/itemPage#iteminfo";
    if(x){
        path = "/itemPage/"+ uid;
    }
    const [itemData,setItemData] = useState([]);
    const productCollectionRef = collection(db,"products");
    useEffect(()=>{
      const getproduct =  async () => {
          const data = await getDocs(productCollectionRef);
          setItemData(data.docs.map((doc)=>({...doc.data(),pid:doc.id})));
      }
      getproduct();
    },[])
    return (
        <div>
        <HomeNavbar Sticky="top"/>
        <ControlledCarousel/>
        <CardCarousel data={itemData} UID = {x} PATH = {path} title="Trending Now"/>
        <CardCarousel data={itemData} UID = {x} PATH = {path}  title="Premium Supplements"/>
        <Footer/>
        </div>
    )
}

export default HomePg

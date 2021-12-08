import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HomeCard from './HomeCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function CardCarousel({data,title,PATH,UID}) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    
      function ncard(val){
        return(
            <HomeCard
            uid = {UID}
            path = {PATH}
            props = {val}
            />
        )
    }

    return (
        <div style={{margin:"20px 10px",display:"flex",flexDirection:"column",border:"1px solid black",padding:"20px",backgroundColor:"rgb(238, 238, 238)"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"rgb(245, 217, 217)",padding:"5px"}}>
                <div>
                    <span style={{fontWeight:"bold",fontSize:"20px"}}>{title}</span>
                </div>
                <div>
                    <button className="btn btn-primary" style={{padding:"2px 5px"}}> View More</button>
                </div>
            </div>
            <div style={{margin:"10px 0px"}}>
                <Carousel responsive={responsive}>
                    {data.map(ncard)}
                </Carousel>
            </div>
        </div>
    )
}

export default CardCarousel

import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from './carousel1.PNG';
import carousel2 from './carousel2.PNG';
import carousel3 from './carousel3.PNG';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} style={{height:"50vh"}}>
        <Carousel.Item style={{height:"50vh"}}>
          <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            style={{height:"50vh"}}
            
          />
        </Carousel.Item>
        <Carousel.Item style={{height:"50vh"}}>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            style={{height:"50vh"}}
          />
        </Carousel.Item>
        <Carousel.Item style={{height:"50vh"}}>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            style={{height:"50vh"}}
          />
        </Carousel.Item>
      </Carousel>
    )
  };

  export default ControlledCarousel;
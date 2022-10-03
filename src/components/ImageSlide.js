import Slider from 'react-slick'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css"
import 'slick-carousel/slick/slick-theme.css' //i need these for the long slider thingys on disney plus
import { useNavigate } from "react-router-dom";

function ImageSlide() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `play`; 
        navigate(path);
  }
    return (
        <Slides {...settings}>
            <Wrap>
                <a style = {{backgroundImage:`url(${'/images/nationalgeo1440.jpg'})`, backgroundSize: 'contain'}} >
                     <img src = '/images/nationalgeop2.png' onClick={routeChange}/>
                </a>
            </Wrap>
            <Wrap>
                <a style = {{backgroundImage:`url(${'/images/thor1440.jpg'})`, backgroundSize: 'contain'}}>
                    <img src = '/images/thorp2.png' onClick={routeChange}/>
                </a>
            </Wrap>
            <Wrap> 
                <a style = {{backgroundImage:`url(${'/images/simpson1440.jpg'})`, backgroundSize: 'contain'}}>
                    <img src = '/images/simpsonp2.png' onClick={routeChange}/>
                </a>
            </Wrap>
            <Wrap> 
                <a style = {{backgroundImage:`url(${'/images/canada1440.png'})`, backgroundSize: 'contain'}}>
                    <img src = '/images/canadap2.png' onClick={routeChange} />
                </a>
            </Wrap>
        </Slides>
    )
}

export default ImageSlide

const Slides = styled(Slider)`
    margin-top: 6px;
    ul li button {
        display: block;
        position: absolute;
        background: transparent;
        &:before {
            opacity: 1;
            padding: 5px;
            top: -30px;
            right: 20px;
            left: 550px;
            width: 20px;
            font-size: 7px;
            color: rgb(150, 158, 171);
       }
    }
    li.slick-active button:: before {
        color: rgb(249, 249, 249);
    }
    
    .slick-list {
        overflow: visible;
    }
    slick-prev {
        left: -75px;
      }
    slick-next {
        right: -75px;
      }

    button {
        z-index: 1; //without this there would be no previous button
    }

`
const Wrap = styled.div`
    top: 12px;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    padding: 10px;
     a {
        display: block;
        border-radius: 4px;
        padding: 4px
        cursor: pointer; 
        position: relative;
        border: 4px solid black;
        box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px, rgb( 0 0 0 / 75%) 0px 15px 10px -10px;

        img {
            width: 100%;
            height: 100%;
            z-index: 1;
        }
    
        &:hover {
            border: 4px solid rgba(249, 249, 249);
            transition-duration: 300ms;
        }
    }  
`;
import React from 'react'
import Slider from 'react-slick'
//import 'slick-carousel/slick/slick.css'
import styled from 'styled-components'
//import 'slick-carousel/slick/slick-theme.css' //i need these for the long slider thingys on disney plus

function ImageSlide() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }
    return (
        <Slides {...settings}>
            <Wrap>
                <img src = '/images/nationalgeo1440.jpg' />
            </Wrap>
                <img src = '/images/thor1440.jpg' />
        </Slides>
    )
}

export default ImageSlide

const Slides = styled(Slider)`
    ul li button {
        &:before {
           font-size 10px;
       }
    }
    li.slick-active button:: before {
        color: white;
    }
    
    .slick-list {
        overflow:visible
    }
    margin-top: 20px

    button {
        z-index: 1; //without this there would be no previous button
    }
`
const Wrap = styled.div`
    img {
        border: 4px solid transparent;
        border-radius: 4px; //allows rounded corners
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px, rgb( 0 0 0 / 75%) 0px 15px 10px -10px;
    }
`
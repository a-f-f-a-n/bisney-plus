import React from 'react'
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
const errorsounds = [
  '/audio/error.mp3',
  '/audio/error8.mp3',
  '/audio/errorC.mp3',
  '/audio/errorL.mp3',
  '/audio/errorM.mp3',
  '/audio/errorMI.mp3',
  '/audio/errorMP.mp3',
  '/audio/errorP.mp3',
  '/audio/errorQ.mp3',
  '/audio/errorS.mp3',
  '/audio/errorSL.mp3',
  '/audio/errorT.mp3',
  '/audio/errorMC.mp3',
  '/audio/errorX.mp3',
]
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const random = getRandom(0, errorsounds.length);
const randomError = errorsounds[random];
function play() {
  new Audio(randomError).play()
  document.getElementById("btn").style.display = "none";
}
const Video = () => {
    const { pathname } = useLocation();
    
    return (
          <Container> 
            <video src='/videos/error_screen.mp4' loop autoplay />
            <img src = '/images/BUTTON.png' id='btn' onClick={play} />
          </Container>
    )
}

export default Video

const Container = styled.div`
    video {
        z-index: -1;
        object-fit: cover;
        position: absolute;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
    }
    img {
        color: #FFFFFFFF;
        z-index: 1;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

`
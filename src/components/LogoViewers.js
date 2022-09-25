import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src = '/images/viewers-disney.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/disney.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src = '/images/viewers-pixar.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/pixar.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src = '/images/viewers-marvel.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/marvel.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src = '/images/viewers-starwars.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/starwars.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src = '/images/viewers-national.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/national.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
            <Wrap>
                <img src = '/images/viewers-hotstar.png' />
                <video autoPlay = {true} loop = {true} playsInline muted>
                    <source src = '/videos/hotstar.mp4' type = 'video/mp4' />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: 30px;
    
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    //fr is fractional unit for this it is on the y axis
`

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    img {
        top: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
        opacity: 1;
        z-index: 1;
        display: block;
        transition: opacity 500ms ease-in-out 0s;
    }
    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        object-fit: cover;
        video {
            opacity: 1;
            transform: scale(1.05);
          }
    }
`
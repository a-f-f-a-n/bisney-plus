import React from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

function Recommended() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `play`; 
        navigate(path);
    }
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
            <Images>
                <img src="/images/familyguy400.jpg" onClick={routeChange}/>
            </Images>
            <Images>
                <img src="/images/modernfamily400.jpg" onClick={routeChange}/>
            </Images>
            <Images>
                <img src="/images/simpsons400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/bluey400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/bobburger400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/criminalminds400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/starwars400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/shehulk400.jpg" onClick={routeChange}/>
            </Images>
            <Images>
                <img src="/images/futurama400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/mickeymouse400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/malcolmmiddle400.jpg" onClick={routeChange}/>
            </Images>
            <Images>
                <img src="/images/bao400.jpg" onClick={routeChange} />
            </Images>
            </Content>
            <h4>Cars</h4>
            <Content>
            <Images>
                <img src="/images/cars400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/cars1400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/cars2400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/cars3400.jpg" onClick={routeChange} />
            </Images>
            </Content>
            <h4>The Spider-Verse</h4>
            <Content>
            <Images>
                <img src="/images/spiderman1400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/spiderman2400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/spiderman3400.jpg" onClick={routeChange} />
            </Images>
            <Images>
                <img src="/images/spidermanh400.jpg" onClick={routeChange} />
            </Images>
            </Content>
            <h4>Bisney Plus Recommends</h4>
            <Content>
                <Images>
                    <img src="/images/dragonball400.jpg" onClick={routeChange} />
                </Images>
                <Images>
                    <img src="/images/dragonball400.jpg" onClick={routeChange} />
                </Images>
                <Images>
                    <img src="/images/dragonball400.jpg" onClick={routeChange} />
                </Images>
                <Images>
                    <img src="/images/dragonball400.jpg" onClick={routeChange} />
                </Images>
            </Content>
        </Container>
    )
}

export default Recommended
const Container = styled.div`
    padding: 0 0 26px;
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Images = styled.div`
    position: relative;
    padding-top: 55%;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rbg(0 0 0/ 73%) 0px 16px 10px -10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        top: 0;
        position: absolute;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px;
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`
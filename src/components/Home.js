import React from 'react' 
import styled from 'styled-components'
import ImageSlide from './ImageSlide'
import LogoViewers from './LogoViewers'
function Home() {
    return (
        <Body>
            <ImageSlide />
            <LogoViewers />
        </Body>
    )
}

export default Home

const Body = styled.main`
    min-height: calc(100vh - 70px); //test
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden; //this makes sure that content overflowing view width doesnt do that anymore
    &:before {
        content: "";
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        
        position: absolute;
        opacity: 1;
        top: 0; 
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }`;

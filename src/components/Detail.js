import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src = '/images/simpsondetailbackground.jpg' />
            </Background>
            <ImageTitle>
                <img src = '/images/simpsondetailtitle.png'/>
            </ImageTitle>
            <Subtitles>
            1989 - 2021 • 33 Seasons
            </Subtitles>
            <Controls>
                <PlayButton>
                    <img src = 'images/play-icon-black.png' />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src = '/images/group-icon.png' />
                </GroupWatchButton>
            </Controls>
            
            <Description>
            <p>This animated comedy focuses on the eponymous family in the town of Springfield. The head of the Simpson family, Homer, is not a typical family man. A nuclear-plant employee, he does his best to lead his family but often finds that they are leading him. The family includes loving, blue-haired matriarch Marge, troublemaking son Bart, overachieving daughter Lisa and baby Maggie.</p>
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px); //viewport height (devices height)
    padding: 0 calc(3.5vw + 5px)
    position: relative;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 1;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    display: flex;
    z-index: 1;
    opacity: 1;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
}`

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;

`

const PlayButton = styled.div`
    border-radius: 4px;
    color: black;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    height: 56px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin: 25px 0px 0px 100px;
    letter-spacing: 1.8px;
    cursor: pointer;
    img {
        width: 32px;
    }
    &:hover {
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px) {
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        img {
          width: 25px;
        }
    }

`
const TrailerButton = styled(PlayButton)` //likepolymorphism/inheritance
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    margin: 25px 0px 0px 30px;
`
const AddButton = styled.button`
    top: 10px;
    left: 10px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    margin-right: 16px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const Subtitles = styled.div`
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;
    margin: 0px 0px 0px 100px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    color: rgb(249, 249, 249);
    margin-left: 100px;
    max-width: 700px;
`
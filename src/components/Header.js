import React from 'react'
import styled from 'styled-components' //this is like css but in js/react

function Header() {
    return (
        
        <Nav> 
           <Logo src='/images/logo.svg' />
           <Nav_Menu>
                <a>
                    <img src = '/images/home-icon.svg' />
                    <span>HOME</span>

                </a>
                <a>
                    <img src = '/images/search-icon.svg' />
                    <span>SEARCH</span>

                </a>
                <a>
                    <img src = '/images/watchlist-icon.svg' />
                    <span>WATCHLIST</span>

                </a>
                <a>
                    <img src = '/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src = '/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src = '/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
           </Nav_Menu>
        </Nav>

    )
}

export default Header


// ` is for template literals!
const Nav = styled.nav`
    height: 70px; 
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    `
const Nav_Menu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 20px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            font-weight: bold;
            letter-spacing: 1.5px;
            position: relative;
            padding: 0 10px;
            &:after { 
                content: "";

                height: 2px;
                position: absolute;
                
                left: 0;
                right: 0;
                bottom: -6px;

                background: white;
                opacity: 0;

                transition: all 250ms cubic-bezier(.25,.46,.45,.94);
                transform-origin: left center;
                transform: scaleX(0);
                
            }
        }
        &:hover {
            span:after {
                opacity: 1;
                transform: scaleX(1);
            }
        }
    }`

// the & is the reference to the parent selector just to make it look nicer
//:after is a pseudo element while :hover is a pseudo class
const Logo = styled.img`
    width: 75px;
`
//NEVER FORGET THE SEMI COLON IN THE CSS AKA STYLED
//styled gives js a div. It is a reference to <div>


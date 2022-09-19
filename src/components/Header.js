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
    display: flex
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 
        }
    }`
const Logo = styled.img`
    width: 80px;
`

//styled gives js a div. It is a reference to <div>


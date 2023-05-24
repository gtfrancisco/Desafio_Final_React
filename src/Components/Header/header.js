import React from "react";
import styled from 'styled-components'
import Logo from './logo.png'



export const HeaderStyle = styled.header`
    position: fixed;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items:center ;
    border: solid 2px;
    height:8vh ;
    width: 99%;
   background:transparent;
   opacity:1;
   backdrop-filter:blur(10px);
   -webkit-backdrop-filter:blur(10px);
   img{
    height:7vh;
    border: solid 2px;
   }
   
    
`
const PagesStyle = styled.nav`
border: solid red;
display: flex;
justify-content: center;
width: 24vw;
flex-direction: row;
li,a{
    text-decoration: none;
    color: lightblue;
    
   }
   
`
export default function Header(){
   

    return(
        <HeaderStyle>
        <img src={Logo} alt="Logo do site" />
        <nav>
            <PagesStyle>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
            </PagesStyle>
        </nav>

        <nav>
            <PagesStyle>
        

            <li>Filtro</li>
            <li>Login</li>
            </PagesStyle>
        </nav>
        </HeaderStyle>
       
    );
}
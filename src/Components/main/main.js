import React from "react";
import styled from "styled-components";
import axios from 'axios'
import Estrela from "./assets/estrela.png"
import {useState, useEffect} from "react"


export const MainStyle = styled.main`
    padding-top: 20px;
    display: flex;
    background-image: url(${props => props.back});
    background-repeat:no-repeat;
    background-size:100% 100%;
    height: 100vh;
    color:white;
    border: solid 2px black;
    justify-content: center;
    align-items: end;
   
   
`
export const Container= styled.div`
display: flex;
width: 86%;
height: 40%;
flex-direction: column;



border: solid 2px red;

`
export const Title = styled.h1`
border: solid 3px;
    font-size: 2rem;
    text-align:start;
`
export const Informacions=styled.div`
display: flex;
border:solid blue ;

img{
    height: 4vw;
}


`
export const ViewNow=styled.button`
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 15px;
  border: none;
  background-color: #d53a00;
  `
  export const ViewTrailer=styled.button`
  
  width: 12vw;
  height: 5vh;
  margin: 1rem;
  color: #f2f2f2;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 20px;
  border-radius: 15px;
  border: none;
  background-color: #717171;
`;


export default function Main (){
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()
    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0,1))
            console.log(fundo)
            

        }).catch(error => alert(`desculpe, você teve um erro de requisição ${error}`))
    }

    return(
        <>
            <MainStyle back={fundo.map(item => item.poster)} id="main">
               
                {fundo.map(item => (
                    <Container>
                        <Title>{item.title}</Title>
                        <Informacions>
                        <img  src={Estrela}  alt="Imagem de uma estrela"/>
                        <h3>{item.vote_average} |</h3>
                        <h3>Lançamento: {item.release_date} |</h3>
                        </Informacions>
                        <h3>{item.overview}</h3>

                        <ViewNow><a href="#" >Assistir agora</a></ViewNow>
                        <ViewTrailer><a href="#">Trailer</a></ViewTrailer>
                    </Container>
                ))}
            </MainStyle>
        </>
    )
}
import { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from 'axios'
import Lupa from './assets/image.png'

export const FilmesStyle = styled.section`
    background-color: black;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
   
    
`
export const H2 = styled.h2`
    font-size: 1.4rem;
    text-align:center;
`
export const BoxFilms = styled.section`
    width:22%;
    img{
        width:80%;
    }
  
`

export const BoxTitle = styled.section`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
div{
    display:flex;
    align-items:center;
}
    img{
        width:15px;
        cursor:pointer;
    }
`

const Caixa = styled.input`
    display:${props => props.show};
`

export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    const [input, setInput] = useState('')
    const [filtrados, setFiltrados] = useState([])
    const [mode, setMode] = useState(false)

    useEffect(() => {
        getFilmes()
        filtar()
    }, [input, filmes, filtrados])

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=09bec95a2576927e18460b98e0d3debd').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                    
                }
            })
            setFilmes(allApi)

        }).catch(error => alert(`Erro de requisição ${error}`))
    }

    const filtar = () => {
        const filtros = filmes.filter((item) => {
            if(item.title.toLowerCase().includes(input.toLocaleLowerCase())){
                return true
            }else{
                return false
            }
        })
        setFiltrados(filtros)
    }

    return (
        <FilmesStyle id="filmes">
            <BoxTitle>
                <H2>Componente de filmes</H2>
                <div>
                    <img onClick={() => setMode(!mode)} src={Lupa} alt='' />
                    <Caixa show={mode === false ? 'none' : 'initial'} onChange={(e) => {setInput(e.target.value)}} />   
                </div>
            </BoxTitle>
            {filtrados.map((item) => (
                <BoxFilms>
                    <img src={item.backdrop_path} alt={item.original_title}/>
                    <h2>Name: {item.original_title}</h2>
                </BoxFilms>
            ))}
        </FilmesStyle>
    )
}
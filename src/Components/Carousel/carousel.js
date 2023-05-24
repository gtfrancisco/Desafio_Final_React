import React, { useEffect, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import axios from "axios";
import styled from "styled-components";

const ContainerCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #272626;
`;
const CarouselTitle = styled.h2`
  font-size: 0.9rem;
  text-align: left;
  color: #f2f2f2;
`;

export default function CarouselComponent() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    getFilmes();
  }, []);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=09bec95a2576927e18460b98e0d3debd"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
          };
        });
        setFilmes(allApi);
      })
      .catch((error) =>
        alert(`desculpe, você teve um erro de requisição ${error}`)
      );
  };

  return (
    <ContainerCarousel>
      <CarouselTitle>Últimos lançamentos</CarouselTitle>
      <Carousel itemsToScroll={3} itemsToShow={5} itemPadding={[30, 30]}>
        {filmes.map((item) => (
          <div>
            <img src={item.image} style={{ width: "90%" }} />
            <CarouselTitle>{item.title}</CarouselTitle>
          </div>
        ))}
      </Carousel>
    </ContainerCarousel>
  );
}

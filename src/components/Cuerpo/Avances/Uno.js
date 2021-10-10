import * as React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { mobile } from "../../../responsive";



const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 5rem;
  ${mobile({ flexWrap: "Wrap", margin: "5px", padding:"4rem" })}
`;

const ContainerVideo = styled.div`
  flex: 1;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexWrap: "Wrap", margin: "5px", flex:"none", justifyContent:"flex-start", alignItems:"flex-start"})}
`;

const Texto = styled.h1`
  padding-bottom: 2rem;
  text-align: left;
  ${mobile({ flexWrap: "Wrap", margin: "0px"})}
`;

const Desc = styled.p`
  padding-bottom: 2rem;
  text-align: left;
  ${mobile({ display:"none" })}
`;

const TextContainer = styled.p`
  flex: 1;
  margin-right: 20px;
  ${mobile({ flexWrap: "Wrap", margin: "5px", marginRight: "5px", flex:"none", display:"flex", justifyContent:"center" })}
`;

export default function Sinopsis(props) {
  return (
    <Container>
      <TextContainer>
        <Texto>{props.Tipo}</Texto>
        <Desc>{props.Descripcion}</Desc>
      </TextContainer>
      <ContainerVideo>
        <ReactPlayer
          url={props.Link}
          width="100%"
          height="100%"
          playing
          loop
          playbackRate={1.75}
        />
      </ContainerVideo>
    </Container>
  );
}
